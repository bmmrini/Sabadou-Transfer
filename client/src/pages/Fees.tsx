import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeeCalculator } from "@/components/FeeCalculator";
import { CheckCircle2 } from "lucide-react";

export default function Fees() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="page-header-soft py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 page-header-soft-overlay"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-gray-900">Tarifs & Frais</h1>
          <p className="text-xl text-gray-600">Transparence totale. Pas de frais cachés.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Column */}
          <div>
            <FeeCalculator variant="card" />

            <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" />
                Le saviez-vous ?
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Nos frais sont parmi les plus compétitifs du marché guinéen.
                De plus, l'envoi est gratuit pour tout montant inférieur à 50,000 GNF.
              </p>
            </div>
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Grille Tarifaire Simplifiée</h2>
              <div className="prose prose-slate text-gray-600">
                <p>
                  Chez Sabadou Transfert, nous croyons que vous ne devriez pas avoir besoin d'une calculatrice pour comprendre combien vous payez.
                  Notre structure de frais est simple et dégressive.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-900">Montant (GNF)</th>
                    <th className="px-6 py-4 font-bold text-gray-900">Frais (GNF)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">1 - 50,000</td>
                    <td className="px-6 py-4 font-medium text-primary">500</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">50,001 - 100,000</td>
                    <td className="px-6 py-4 font-medium text-primary">2,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">100,001 - 500,000</td>
                    <td className="px-6 py-4 font-medium text-primary">5,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">500,001 - 1,000,000</td>
                    <td className="px-6 py-4 font-medium text-primary">10,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">1,000,001 - 5,000,000</td>
                    <td className="px-6 py-4 font-medium text-primary">1% du montant</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">&gt; 5,000,000</td>
                    <td className="px-6 py-4 font-medium text-primary">0.8% du montant</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 italic">
              * Ces tarifs sont indicatifs et peuvent être sujets à modification sans préavis.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
