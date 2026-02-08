import { create } from 'zustand';

type Language = 'fr' | 'en';

type LocaleStore = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Simple dictionary for MVP translation
const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.calculate': 'Calculer les frais',
    'nav.find_agency': 'Trouver une agence',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.title': 'Envoyez de l\'argent à travers la Guinée instantanément',
    'hero.subtitle': 'Simple, rapide et sécurisé. Pas besoin de compte bancaire. Le moyen le plus fiable de transférer de l\'argent.',
    'hero.cta': 'Trouver une agence',
    'calc.title': 'Simuler un transfert',
    'calc.amount_label': 'Montant à envoyer (GNF)',
    'calc.fee_label': 'Frais estimé',
    'calc.total_label': 'Total à payer',
    'calc.button': 'Calculer',
    'calc.disclaimer': 'Les frais peuvent varier légèrement selon l\'agence.',
    'features.speed': 'Transfert Rapide',
    'features.speed_desc': 'L\'argent est disponible pour le retrait en quelques minutes.',
    'features.security': 'Sécurité Garantie',
    'features.security_desc': 'Vos fonds sont protégés par des protocoles de sécurité avancés.',
    'features.network': 'Vaste Réseau',
    'features.network_desc': 'Présent dans les 33 préfectures de la Guinée.',
    'cta.ready': 'Prêt à envoyer de l\'argent ?',
    'footer.reliable': 'Transfert d\'argent fiable en Guinée',
  },
  en: {
    'nav.home': 'Home',
    'nav.calculate': 'Calculate Fees',
    'nav.find_agency': 'Find an Agency',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.title': 'Send money across Guinea instantly',
    'hero.subtitle': 'Simple, fast, and secure. No bank account needed. The most reliable way to transfer money.',
    'hero.cta': 'Find an Agency',
    'calc.title': 'Simulate a Transfer',
    'calc.amount_label': 'Amount to send (GNF)',
    'calc.fee_label': 'Estimated Fee',
    'calc.total_label': 'Total to Pay',
    'calc.button': 'Calculate',
    'calc.disclaimer': 'Fees may vary slightly depending on the agency.',
    'features.speed': 'Fast Transfer',
    'features.speed_desc': 'Money is available for pickup within minutes.',
    'features.security': 'Guaranteed Security',
    'features.security_desc': 'Your funds are protected by advanced security protocols.',
    'features.network': 'Wide Network',
    'features.network_desc': 'Present in all 33 prefectures of Guinea.',
    'cta.ready': 'Ready to send money?',
    'footer.reliable': 'Reliable money transfer in Guinea',
  }
};

export const useLocale = create<LocaleStore>((set, get) => ({
  language: 'fr', // Default to French as requested
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const lang = get().language;
    return translations[lang][key] || key;
  }
}));
