import { Link, useLocation } from "wouter";
import { useLocale } from "@/hooks/use-locale";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLocale();

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/fees", label: t('nav.calculate') },
    { href: "/agencies", label: t('nav.find_agency') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:rotate-6 overflow-hidden p-1">
              <img src="/attached_assets/Sabadou_logo_(1)_1770548963109.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              Sabadou<span className="text-primary">Transfert</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === link.href ? "text-primary" : "text-gray-600"
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
            
            <div className="h-6 w-px bg-gray-200" />
            
            <Link href="/agencies">
              <Button className="font-semibold shadow-lg shadow-primary/25 hover:shadow-xl transition-all hover:-translate-y-0.5">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location === link.href 
                      ? "bg-primary/10 text-primary" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/agencies">
                <Button className="w-full justify-center text-base py-6 shadow-md" onClick={() => setIsOpen(false)}>
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
