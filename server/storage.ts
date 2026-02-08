import { db } from "./db";
import {
  agencies,
  feeTiers,
  blogPosts,
  contactMessages,
  type InsertAgency,
  type InsertFeeTier,
  type InsertBlogPost,
  type InsertContactMessage,
  type Agency,
  type FeeTier,
  type BlogPost,
  type ContactMessage,
} from "@shared/schema";
import { eq, like, or, and, sql } from "drizzle-orm";

export interface IStorage {
  // Agencies
  getAgencies(search?: string, prefecture?: string): Promise<Agency[]>;
  getAgency(id: number): Promise<Agency | undefined>;
  createAgency(agency: InsertAgency): Promise<Agency>;

  // Fees
  getFeeTiers(): Promise<FeeTier[]>;
  createFeeTier(tier: InsertFeeTier): Promise<FeeTier>;
  calculateFee(amount: number): Promise<{ fee: number; total: number; amount: number }>;

  // Blog
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Contact
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getAgencies(search?: string, prefecture?: string): Promise<Agency[]> {
    let query = db.select().from(agencies);
    
    const conditions = [];
    if (search) {
      conditions.push(
        or(
          like(agencies.name, `%${search}%`),
          like(agencies.city, `%${search}%`),
          like(agencies.address, `%${search}%`)
        )
      );
    }
    if (prefecture && prefecture !== 'All') {
      conditions.push(eq(agencies.prefecture, prefecture));
    }

    if (conditions.length > 0) {
      // @ts-ignore - Drizzle types can be tricky with dynamic conditions
      return await query.where(and(...conditions));
    }
    
    return await query;
  }

  async getAgency(id: number): Promise<Agency | undefined> {
    const [agency] = await db.select().from(agencies).where(eq(agencies.id, id));
    return agency;
  }

  async createAgency(agency: InsertAgency): Promise<Agency> {
    const [newAgency] = await db.insert(agencies).values(agency).returning();
    return newAgency;
  }

  async getFeeTiers(): Promise<FeeTier[]> {
    return await db.select().from(feeTiers).where(eq(feeTiers.active, true));
  }

  async createFeeTier(tier: InsertFeeTier): Promise<FeeTier> {
    const [newTier] = await db.insert(feeTiers).values(tier).returning();
    return newTier;
  }

  async calculateFee(amount: number): Promise<{ fee: number; total: number; amount: number }> {
    // Find the tier that matches the amount
    // Logic: minAmount <= amount <= maxAmount
    // Note: Drizzle doesn't have a simple 'between' helper that takes columns easily in where clause for this specific structure sometimes, 
    // but we can use simple comparisons.
    
    const tiers = await this.getFeeTiers();
    const tier = tiers.find(t => amount >= t.minAmount && amount <= t.maxAmount);

    // Fallback or specific logic if no tier found? 
    // Usually money transfer has a catch-all or percentage for high amounts. 
    // For now, let's assume if no tier, we take the highest tier's fee or a default percentage.
    // Let's implement a simple logic: if amount > max of all tiers, use the last tier fee + 1%? 
    // Or just fail. For MVP, let's assume coverage.
    
    let fee = 0;
    if (tier) {
      fee = tier.fee;
    } else {
      // If amount is higher than highest tier, use 1% (example) or just highest fee
      const maxTier = tiers.sort((a, b) => b.maxAmount - a.maxAmount)[0];
      if (maxTier && amount > maxTier.maxAmount) {
         fee = maxTier.fee + (amount - maxTier.maxAmount) * 0.01; 
      }
    }
    
    // Round fee to nearest 500 GNF for cleaner numbers? Optional.
    fee = Math.ceil(fee);

    return {
      amount,
      fee,
      total: amount + fee
    };
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(sql`${blogPosts.publishedAt} DESC`);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
