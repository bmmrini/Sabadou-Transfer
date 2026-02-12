import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-foreground pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Sabadou<span className="text-primary">Transfert</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Le moyen le plus simple, rapide et sécurisé pour envoyer de l'argent partout en Guinée.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-display">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/fees" className="hover:text-primary transition-colors">Calculer les frais</Link></li>
              <li><Link href="/agencies" className="hover:text-primary transition-colors">Nos Agences</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Actualités</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-display">Légal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sécurité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-display">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>Siège Social, Kaloum, Conakry, République de Guinée</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>+224 660 00 00 00</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>contact@sabadoutransfert.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sabadou Transfert. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Fait avec fierté en Guinée 🇬🇳</p>
        </div>
      </div>
    </footer>
  );
}
