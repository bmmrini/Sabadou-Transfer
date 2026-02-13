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
  // Utility
  isDbAvailable(): boolean;

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
  isDbAvailable(): boolean {
    return db !== null;
  }

  async getAgencies(search?: string, prefecture?: string): Promise<Agency[]> {
    if (!db) return [];

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
    if (!db) return undefined;
    const [agency] = await db.select().from(agencies).where(eq(agencies.id, id));
    return agency;
  }

  async createAgency(agency: InsertAgency): Promise<Agency> {
    if (!db) throw new Error("Database not available");
    const [newAgency] = await db.insert(agencies).values(agency).returning();
    return newAgency;
  }

  async getFeeTiers(): Promise<FeeTier[]> {
    if (!db) return [];
    return await db.select().from(feeTiers).where(eq(feeTiers.active, true));
  }

  async createFeeTier(tier: InsertFeeTier): Promise<FeeTier> {
    if (!db) throw new Error("Database not available");
    const [newTier] = await db.insert(feeTiers).values(tier).returning();
    return newTier;
  }

  async calculateFee(amount: number): Promise<{ fee: number; total: number; amount: number }> {
    // Simple fee calculation logic that works without DB
    let fee = 0;

    if (amount <= 50000) {
      fee = 500;
    } else if (amount <= 100000) {
      fee = 2000;
    } else if (amount <= 500000) {
      fee = 5000;
    } else if (amount <= 1000000) {
      fee = 10000;
    } else if (amount <= 5000000) {
      fee = amount * 0.01;
    } else {
      fee = amount * 0.008;
    }

    fee = Math.ceil(fee);

    return {
      amount,
      fee,
      total: amount + fee
    };
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    if (!db) {
      // Return demo blog posts when no database
      return [
        {
          id: 1,
          slug: "expansion-reseau-2024",
          title: "Sabadou Transfert élargit son réseau en 2024",
          excerpt: "Nous sommes fiers d'annoncer l'ouverture de 15 nouvelles agences à travers la Guinée pour mieux vous servir.",
          content: `
# Expansion de notre réseau en 2024

Nous sommes ravis d'annoncer une expansion majeure de notre réseau d'agences à travers la Guinée. Cette initiative s'inscrit dans notre engagement continu à rendre nos services de transfert d'argent accessibles à tous les Guinéens, peu importe où ils se trouvent.

## Nouvelles agences

Au cours du premier trimestre 2024, nous avons ouvert **15 nouvelles agences** dans les régions suivantes :

- **Haute-Guinée** : 5 nouvelles agences à Kankan, Siguiri et Kouroussa
- **Guinée Forestière** : 4 agences à N'Zérékoré et Macenta
- **Moyenne-Guinée** : 3 agences à Labé et Pita
- **Basse-Guinée** : 3 agences à Kindia et Boké

## Notre engagement

Cette expansion témoigne de notre volonté de :

1. **Rapprocher nos services** de nos clients
2. **Créer des emplois** dans les communautés locales
3. **Faciliter les transferts** d'argent rapides et sécurisés
4. **Soutenir l'économie locale** en rendant les transactions financières plus accessibles

## Prochaines étapes

Nous prévoyons d'ouvrir 10 agences supplémentaires d'ici la fin de l'année 2024, avec un focus particulier sur les zones rurales qui ont un accès limité aux services financiers.

Merci de votre confiance continue en Sabadou Transfert !
          `,
          coverImage: "/images/blog-expansion.jpg",
          publishedAt: new Date("2024-02-01"),
          createdAt: new Date("2024-02-01"),
          updatedAt: new Date("2024-02-01"),
        },
        {
          id: 2,
          slug: "conseils-transferts-securises",
          title: "5 conseils pour des transferts d'argent sécurisés",
          excerpt: "Découvrez nos meilleures pratiques pour garantir la sécurité de vos transactions financières.",
          content: `
# 5 conseils pour des transferts d'argent sécurisés

La sécurité de vos fonds est notre priorité absolue. Voici nos conseils essentiels pour effectuer des transferts d'argent en toute sécurité.

## 1. Vérifiez toujours l'identité du destinataire

Avant d'envoyer de l'argent, assurez-vous de bien connaître la personne qui va le recevoir. Confirmez :
- Le nom complet
- Le numéro de téléphone
- La localisation

## 2. Gardez vos codes confidentiels

Ne partagez **jamais** votre code de transaction par SMS, email ou sur les réseaux sociaux. Le code doit être communiqué uniquement :
- En personne
- Par appel téléphonique direct
- Via une application de messagerie sécurisée

## 3. Utilisez nos agences officielles

Pour votre sécurité, effectuez toujours vos transactions dans nos agences officielles Sabadou Transfert. Vous pouvez trouver la liste complète sur notre site web.

## 4. Conservez vos reçus

Gardez toujours une copie de votre reçu de transaction jusqu'à ce que le destinataire confirme la réception des fonds.

## 5. Signalez toute activité suspecte

Si vous remarquez quelque chose d'inhabituel, contactez immédiatement notre service client :
- Téléphone : +224 620 59 59 83
- Email : central@sabadouservices.com

## En cas de problème

Notre équipe est disponible 24/7 pour vous assister. N'hésitez pas à nous contacter pour toute question ou préoccupation concernant vos transactions.

**Votre sécurité, notre engagement !**
          `,
          coverImage: "/images/blog-trust.jpg",
          publishedAt: new Date("2024-01-15"),
          createdAt: new Date("2024-01-15"),
          updatedAt: new Date("2024-01-15"),
        },
        {
          id: 3,
          slug: "frais-transfert-transparents",
          title: "Comprendre nos frais de transfert : transparence totale",
          excerpt: "Découvrez comment nous calculons nos frais et pourquoi Sabadou offre les meilleurs tarifs du marché.",
          content: `
# Comprendre nos frais de transfert

Chez Sabadou Transfert, nous croyons en la **transparence totale**. Voici tout ce que vous devez savoir sur nos frais de transfert.

## Notre structure tarifaire

Nos frais sont calculés en fonction du montant que vous envoyez :

| Montant envoyé | Frais |
|----------------|-------|
| 0 - 50 000 GNF | 500 GNF |
| 50 001 - 100 000 GNF | 2 000 GNF |
| 100 001 - 500 000 GNF | 5 000 GNF |
| 500 001 - 1 000 000 GNF | 10 000 GNF |
| Plus de 1 000 000 GNF | 1% du montant |

## Pourquoi choisir Sabadou ?

### 1. Pas de frais cachés
Le montant que vous voyez est le montant que vous payez. Aucune surprise !

### 2. Tarifs compétitifs
Nous offrons les meilleurs tarifs du marché guinéen pour les transferts nationaux.

### 3. Calculateur en ligne
Utilisez notre calculateur gratuit sur notre site web pour connaître exactement le coût de votre transfert avant de vous déplacer.

## Conseils pour économiser

- **Regroupez vos envois** : Envoyez des montants plus importants moins souvent pour optimiser les frais
- **Utilisez notre calculateur** : Planifiez vos transferts à l'avance
- **Profitez de nos promotions** : Suivez-nous sur les réseaux sociaux pour nos offres spéciales

## Questions fréquentes

**Q : Y a-t-il des frais supplémentaires pour les retraits ?**
R : Non, le retrait est gratuit dans toutes nos agences.

**Q : Les frais changent-ils selon la destination ?**
R : Non, nos frais sont les mêmes pour toutes les destinations en Guinée.

**Q : Puis-je annuler un transfert ?**
R : Oui, tant que le destinataire n'a pas encore retiré les fonds. Des frais d'annulation peuvent s'appliquer.

---

Pour toute question sur nos tarifs, n'hésitez pas à contacter notre service client ou à visiter l'une de nos agences.
          `,
          coverImage: "/images/entrepreneur-mobile.jpg",
          publishedAt: new Date("2024-01-01"),
          createdAt: new Date("2024-01-01"),
          updatedAt: new Date("2024-01-01"),
        },
      ] as BlogPost[];
    }
    return await db.select().from(blogPosts).orderBy(sql`${blogPosts.publishedAt} DESC`);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    if (!db) {
      // Return demo blog post when no database
      const demoPosts = await this.getBlogPosts();
      return demoPosts.find(post => post.slug === slug);
    }
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    if (!db) throw new Error("Database not available");
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    if (!db) {
      // In no-DB mode, just log and return a mock response
      console.log("Contact message received (no DB):", message);
      return {
        id: Date.now(),
        ...message,
        createdAt: new Date(),
      } as ContactMessage;
    }
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
