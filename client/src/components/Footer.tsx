import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, MapPin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-foreground pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                <img src="/images/logo.png" alt="Sabadou Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Sabadou<span className="text-primary">Transfert</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Le moyen le plus simple, rapide et sécurisé pour envoyer de l'argent partout en Guinée.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/sabadouservices" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/sabadouservices224" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@sabadoutransfert" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-display">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Accueil</a></Link></li>
              <li><Link href="/a-propos"><a className="hover:text-primary transition-colors">À Propos</a></Link></li>
              <li><Link href="/tarifs"><a className="hover:text-primary transition-colors">Calculer les frais</a></Link></li>
              <li><Link href="/agences"><a className="hover:text-primary transition-colors">Nos Agences</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-primary transition-colors">Blog & Actualités</a></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-display">Légal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/conditions-generales"><a className="hover:text-primary transition-colors">Conditions d'utilisation</a></Link></li>
              <li><Link href="/politique-confidentialite"><a className="hover:text-primary transition-colors">Politique de confidentialité</a></Link></li>
              <li><Link href="/mentions-legales"><a className="hover:text-primary transition-colors">Mentions légales</a></Link></li>
              <li><Link href="/securite"><a className="hover:text-primary transition-colors">Sécurité</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-display">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>Marché Sogbè immeuble bourlaye Nabé, Kankan, Guinée</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+224620595983" className="hover:text-primary transition-colors">+224 620 59 59 83</a>
                  <a href="tel:+224612710861" className="hover:text-primary transition-colors">+224 612 71 08 61</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <a href="mailto:central@sabadouservices.com" className="hover:text-primary transition-colors">central@sabadouservices.com</a>
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
