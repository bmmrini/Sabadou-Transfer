import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === Agencies ===
export const agencies = pgTable("agencies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  prefecture: text("prefecture").notNull(), // One of the 33 prefectures
  city: text("city").notNull(),
  address: text("address").notNull(),
  phone: text("phone").notNull(),
  isHq: boolean("is_hq").default(false),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
});

export const insertAgencySchema = createInsertSchema(agencies).omit({ id: true });
export type Agency = typeof agencies.$inferSelect;
export type InsertAgency = z.infer<typeof insertAgencySchema>;

// === Fee Tiers ===
export const feeTiers = pgTable("fee_tiers", {
  id: serial("id").primaryKey(),
  minAmount: integer("min_amount").notNull(),
  maxAmount: integer("max_amount").notNull(),
  fee: integer("fee").notNull(), // Fixed fee in GNF
  active: boolean("active").default(true),
});

export const insertFeeTierSchema = createInsertSchema(feeTiers).omit({ id: true });
export type FeeTier = typeof feeTiers.$inferSelect;
export type InsertFeeTier = z.infer<typeof insertFeeTierSchema>;

// === Blog Posts ===
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  publishedAt: timestamp("published_at").defaultNow(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true, publishedAt: true });
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

// === Contact Messages ===
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// === API Types ===
export type CalculateFeeRequest = { amount: number };
export type CalculateFeeResponse = { fee: number; total: number; amount: number };
