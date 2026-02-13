import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeeCalculator } from "@/components/FeeCalculator";
import { useLocale } from "@/hooks/use-locale";
import { MapPin, Shield, Zap, TrendingUp, Users, Smartphone, ArrowRight, Calculator, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import Gemini_Generated_Image_dfvcyjdfvcyjdfvc from "@assets/Gemini_Generated_Image_dfvcyjdfvcyjdfvc.webp";
import AdamaOuryBarryAvatar from "@assets/Adama Oury Barry.webp";
import MohamedKouroumaAvatar from "@assets/Mohamed Kourouma.webp";
import IsmaelSidibeAvatar from "@assets/Ismael Sidibe.webp";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F4F6FA] via-[#F0F4F8] to-[#E8F0F7] pt-16 pb-32 md:pt-24 md:pb-48 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>

        {/* Animated gradient orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 right-1/4 w-20 h-20 border-2 border-primary/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-secondary/5 rounded-full animate-float-delayed"></div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            {/* Hero Text */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-5 py-2 mb-6 border border-primary/20 shadow-lg shadow-primary/5"
              >
                <span className="w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary/50"></span>
                <span className="text-sm font-bold text-primary">✓ Disponible 24/7 partout en Guinée</span>
              </motion.div>

              <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                <span className="text-[#1E2A7A]">Envoyez de l'argent </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">à travers la Guinée</span>
                <span className="text-[#1E2A7A]"> instantanément</span>
              </motion.h1>

              <motion.p variants={item} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </motion.p>

              <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto uppercase tracking-wide">
                  <Link href="/agencies">
                    {t('hero.cta')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/fees">
                    Voir les tarifs
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex-1 w-full max-w-md lg:max-w-lg"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-20 animate-pulse"></div>

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-1 shadow-2xl">
                  <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-[22px] p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                        <Calculator className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1E2A7A] font-display">Simulateur Rapide</h3>
                        <p className="text-gray-500 text-sm">Combien voulez-vous envoyer ?</p>
                      </div>
                    </div>
                    <FeeCalculator variant="card" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Stats/Trust Section */}
      <section className="py-12 bg-white -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary font-display">33</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Préfectures</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary font-display">100+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Agences</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary font-display">99%</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Satisfaction</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary font-display">0s</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Délai d'attente</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Pourquoi choisir Sabadou ?</h2>
            <p className="text-xl text-gray-600">Nous simplifions les transferts d'argent pour que vous puissiez vous concentrer sur l'essentiel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{t('features.speed')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('features.speed_desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{t('features.security')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('features.security_desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{t('features.network')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('features.network_desc')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">Comment ça marche ?</h2>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Rendez-vous en agence</h4>
                    <p className="text-gray-600">Trouvez l'agence Sabadou la plus proche de chez vous parmi notre vaste réseau.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Déposez l'argent</h4>
                    <p className="text-gray-600">Donnez le montant et les coordonnées du destinataire à l'agent.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Transfert instantané</h4>
                    <p className="text-gray-600">Le destinataire reçoit un code et peut retirer l'argent immédiatement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              {/* Using Unsplash image for lifestyle representation */}
              {/* Happy customer using phone for financial transaction */}
              <img
                src={Gemini_Generated_Image_dfvcyjdfvcyjdfvc}
                alt="Client satisfait"
                className="relative z-10 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Des milliers de clients satisfaits nous font confiance chaque jour</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Avec Sabadou Transfert je suis confiante que mon argent arrive à destination, merci pour le service rendu..."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={AdamaOuryBarryAvatar}
                  alt="Adama Oury Barry"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold text-gray-900">Adama Oury Barry</p>
                  <p className="text-sm text-gray-500">Kankan, Guinée</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Les transferts d'argent vers les pays africains est un énorme succès"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={MohamedKouroumaAvatar}
                  alt="Mohamed Kourouma"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold text-gray-900">Mohamed Kourouma</p>
                  <p className="text-sm text-gray-500">Casablanca, Maroc</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Je recommende votre entreprise à tout client désireux de transférer de l'argent en toute sécurité partout dans le monde."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={IsmaelSidibeAvatar}
                  alt="Ismael Sidibé"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold text-gray-900">Ismael Sidibé</p>
                  <p className="text-sm text-gray-500">London, GB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Notre Équipe</h2>
            <p className="text-xl text-gray-600">Voici quelques uns de nos superstars</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img src="/images/team/pdg.webp" alt="Mory Kourouma" className="aspect-square object-cover w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">Mory Kourouma</h3>
                <p className="text-primary font-medium">PDG Sabadou Transfert</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img src="/images/team/chef-agence.webp" alt="Camara Lakissienne Mahana" className="aspect-square object-cover w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">Camara Lakissienne Mahana</h3>
                <p className="text-primary font-medium">Chef Agence Kissidougou</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img src="/images/team/aly.webp" alt="Aly Kourouma" className="aspect-square object-cover w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">Aly Kourouma</h3>
                <p className="text-primary font-medium">Services Commercial & Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Zap className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">{t('cta.ready')}</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Rejoignez des milliers de Guinéens qui font confiance à Sabadou pour leurs transferts quotidiens.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto uppercase tracking-wide">
              <Link href="/agencies">
                Trouver une agence
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40">
              <Link href="/contact">
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
