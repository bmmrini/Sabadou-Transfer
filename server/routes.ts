import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Agencies
  app.get(api.agencies.list.path, async (req, res) => {
    const search = req.query.search as string | undefined;
    const prefecture = req.query.prefecture as string | undefined;
    const agencies = await storage.getAgencies(search, prefecture);
    res.json(agencies);
  });

  app.get(api.agencies.get.path, async (req, res) => {
    const agency = await storage.getAgency(Number(req.params.id));
    if (!agency) {
      return res.status(404).json({ message: "Agency not found" });
    }
    res.json(agency);
  });

  // Fees
  app.post(api.fees.calculate.path, async (req, res) => {
    try {
      const { amount } = api.fees.calculate.input.parse(req.body);
      const result = await storage.calculateFee(amount);
      res.json(result);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid amount" });
      }
      throw err;
    }
  });

  // Blog
  app.get(api.blog.list.path, async (req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get(api.blog.get.path, async (req, res) => {
    const post = await storage.getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const message = api.contact.submit.input.parse(req.body);
      await storage.createContactMessage(message);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error" });
      }
      throw err;
    }
  });

  // Seed Data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingAgencies = await storage.getAgencies();
  if (existingAgencies.length === 0) {
    console.log("Seeding database...");
    
    // Seed Agencies (Sample of the 375+)
    const sampleAgencies = [
      { name: "Agence Principale Madina", prefecture: "Conakry", city: "Conakry", address: "Marche Madina, Avaria", phone: "620 00 00 01", isHq: true },
      { name: "Agence Kaloum", prefecture: "Conakry", city: "Conakry", address: "Almamya, pres de la banque centrale", phone: "620 00 00 02" },
      { name: "Agence Labe Centre", prefecture: "Labe", city: "Labe", address: "Grand Marche, Sassé", phone: "620 00 00 03" },
      { name: "Agence Kankan Ville", prefecture: "Kankan", city: "Kankan", address: "Quartier Missiran", phone: "620 00 00 04" },
      { name: "Agence N'Zerekore", prefecture: "N'Zerekore", city: "N'Zerekore", address: "Marche Central", phone: "620 00 00 05" },
      { name: "Agence Mamou", prefecture: "Mamou", city: "Mamou", address: "Carrefour Luna", phone: "620 00 00 06" },
      { name: "Agence Kindia", prefecture: "Kindia", city: "Kindia", address: "Gare Routiere", phone: "620 00 00 07" },
      { name: "Agence Faranah", prefecture: "Faranah", city: "Faranah", address: "Centre Ville", phone: "620 00 00 08" },
      { name: "Agence Siguiri", prefecture: "Siguiri", city: "Siguiri", address: "Kouranko", phone: "620 00 00 09" },
      { name: "Agence Gueckedou", prefecture: "Gueckedou", city: "Gueckedou", address: "Marche", phone: "620 00 00 10" },
    ];

    for (const agency of sampleAgencies) {
      await storage.createAgency(agency);
    }

    // Seed Fee Tiers (Example structure)
    // 0 - 500k: 5000
    // 500k - 1M: 10000
    // 1M - 5M: 1%
    const tiers = [
      { minAmount: 0, maxAmount: 100000, fee: 2000 },
      { minAmount: 100001, maxAmount: 500000, fee: 5000 },
      { minAmount: 500001, maxAmount: 1000000, fee: 10000 },
      { minAmount: 1000001, maxAmount: 2000000, fee: 15000 },
      { minAmount: 2000001, maxAmount: 5000000, fee: 30000 },
      { minAmount: 5000001, maxAmount: 10000000, fee: 50000 },
      { minAmount: 10000001, maxAmount: 20000000, fee: 80000 },
      { minAmount: 20000001, maxAmount: 50000000, fee: 150000 },
    ];

    for (const tier of tiers) {
      await storage.createFeeTier(tier);
    }

    // Seed Blog Posts
    await storage.createBlogPost({
      slug: "launch-new-website",
      title: "Sabadou Transfert Launches New Website",
      excerpt: "We are proud to announce the launch of our new modern website to better serve our customers.",
      content: "Welcome to the new Sabadou Transfert website! We have redesigned our online presence to make it easier for you to find our agencies and calculate transfer fees. Our goal is to provide transparency and speed in all your transactions. Stay tuned for more updates!",
      coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d"
    });

    await storage.createBlogPost({
      slug: "expansion-kankan",
      title: "New Agencies in Kankan Region",
      excerpt: "Expanding our network to reach more people in Upper Guinea.",
      content: "We are excited to open 5 new agencies in the Kankan region this month. This expansion is part of our commitment to being present in every corner of Guinea. Check our Agency Finder to see the new locations.",
      coverImage: "https://images.unsplash.com/photo-1526304640152-d292a39d9512"
    });

    console.log("Database seeded successfully.");
  }
}
