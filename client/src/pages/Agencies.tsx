import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAgencies } from "@/hooks/use-agencies";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Navigation, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PREFECTURES = [
  "Conakry", "Kindia", "Boké", "Mamou", "Labé", "Kankan", "Faranah", "N'Zérékoré", 
  "Coyah", "Dubréka", "Forecariah", "Boffa", "Fria", "Gaoual", "Koundara", "Télimélé",
  "Dalaba", "Pita", "Tougué", "Koubia", "Lélouma", "Mali", "Dinguiraye", "Dabola",
  "Kouroussa", "Mandiana", "Siguiri", "Kérouané", "Kissidougou", "Guéckédou", "Macenta",
  "Beyla", "Lola", "Yomou"
];

export default function Agencies() {
  const [search, setSearch] = useState("");
  const [prefecture, setPrefecture] = useState<string>("all");
  
  const { data: agencies, isLoading, error } = useAgencies({ 
    search: search || undefined,
    prefecture: prefecture === "all" ? undefined : prefecture
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-primary pt-16 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display relative z-10">Nos Agences</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto relative z-10">
          Trouvez l'agence Sabadou Transfert la plus proche de vous parmi notre réseau national.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        {/* Filters Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Rechercher par ville, quartier ou nom..." 
                className="pl-10 h-12 text-base bg-gray-50 border-gray-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <Select value={prefecture} onValueChange={setPrefecture}>
                <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Choisir une préfecture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les préfectures</SelectItem>
                  {PREFECTURES.map(p => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-gray-500">Chargement des agences...</p>
          </div>
        ) : error ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-red-100">
            <p className="text-red-500">Une erreur est survenue lors du chargement des données.</p>
          </div>
        ) : agencies?.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucune agence trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies?.map((agency) => (
              <div key={agency.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {agency.isHq && (
                    <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                      Siège
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display line-clamp-1">{agency.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-gray-600 text-sm">
                    <Navigation className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                    <span>{agency.address}, {agency.city}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="w-4 h-4 mr-2 shrink-0" />
                    <span>{agency.phone}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-50">
                  <Button variant="outline" className="w-full justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                    Voir sur la carte
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
