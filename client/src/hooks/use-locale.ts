import { create } from 'zustand';

type Language = 'fr';

type LocaleStore = {
  language: Language;
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
    'hero.title': "Envoyez de l'argent à travers la Guinée instantanément",
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
  }
};

export const useLocale = create<LocaleStore>((get) => ({
  language: 'fr',
  t: (key) => {
    return translations['fr'][key] || key;
  }
}));
