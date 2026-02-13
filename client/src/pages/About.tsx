import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, Award, Zap, HeartHandshake } from "lucide-react";
import SabadouOfficeImage from "@assets/Sabadou Transfert.webp";

// Animation variants (reused from Home for consistency)
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

export default function About() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative page-header-soft pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 page-header-soft-overlay"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            Qui sommes-nous ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez l'histoire, l'ambition et les valeurs qui font de Sabadou Transfert un leader en Guinée.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Notre Histoire */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24 flex flex-col md:flex-row items-start gap-12"
          >
            <div className="flex-1">
              <div className="bg-primary/5 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 relative inline-block">
                Notre Histoire
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 -z-10"></span>
              </h2>
              <h3 className="text-xl font-medium text-primary mb-4 italic">
                "Notre histoire nous permet d’avancer, notre avenir sera assuré par nos expériences acquises"
              </h3>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Sabadou Transfert créée en 1999, a acquis ces 23 dernières années une expérience inégalée dans les domaines des transactions monétaires qui fait d’elle l’un des leaders du marché des transferts d’argent sur le plan national en Guinée et les transferts internationaux.
                </p>
                <p>
                  Des années de créativités et d’efforts continus pour accompagner habituellement les clients dans leurs aspirations futures.
                </p>
              </div>
            </div>
            {/* Image section with actual Sabadou office photo */}
            <motion.div
              variants={item}
              className="flex-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={SabadouOfficeImage}
                  alt="Bureau Officiel Sabadou Transfert"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-display text-lg font-semibold">Bureau Officiel Sabadou Transfert</p>
                  <p className="text-white/90 text-sm">Leader en Guinée depuis 1999</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Notre Ambition */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24 bg-[#F4F6FA] rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Notre Ambition</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Situer les clients par rapport à notre stratégie : les satisfaire par notre savoir-faire, la bienveillance et la qualité de nos produits et services.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <HeartHandshake className="w-8 h-8 text-secondary mb-3" />
                  <p className="font-medium text-gray-800">Être une entreprise garantie, innovante et leader sur notre marché.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <MapPin className="w-8 h-8 text-secondary mb-3" />
                  <p className="font-medium text-gray-800">Nous engager au service de nos clients d’ici et d’ailleurs, à l’aide de notre réseau étendu.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nos Valeurs */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                La stratégie de progression de Sabadou Transfert est soutenue par des mérites communément partagées.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Rapidité */}
              <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Rapidité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sabadou Transfert, avec sa technologie à la pointe et une équipe vouée à la réussite de l’entreprise.
                </p>
              </motion.div>

              {/* Esprit d'équipe */}
              <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Esprit d'équipe</h3>
                <p className="text-gray-600 leading-relaxed">
                  Une équipe très engagée, active et prônant la coresponsabilité, mobilisée dans une synergie parfaite pour atteindre un but commun.
                </p>
              </motion.div>

              {/* Disponibilité */}
              <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Disponibilité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Son vaste réseau couvrant tout le territoire national et ses horaires souples réduisent les distances.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
