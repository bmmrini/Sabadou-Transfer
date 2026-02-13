import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAgencies } from "@/hooks/use-agencies";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Navigation, Phone, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { AGENCIES_DATA } from "@/data/agencies-data";

// Extract unique prefectures and sort them
const PREFECTURES = Array.from(new Set(AGENCIES_DATA.map(a => a.prefecture).filter(Boolean))).sort();

const ITEMS_PER_PAGE = 12;

export default function Agencies() {
  const [search, setSearch] = useState("");
  const [prefecture, setPrefecture] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: agencies, isLoading, error } = useAgencies({
    search: search || undefined,
    prefecture: prefecture === "all" ? undefined : prefecture
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePrefectureChange = (value: string) => {
    setPrefecture(value);
    setCurrentPage(1);
  };

  const totalItems = agencies?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedAgencies = useMemo(() => {
    return agencies?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [agencies, currentPage]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="page-header-soft pt-16 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 page-header-soft-overlay"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display relative z-10">Nos Agences</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto relative z-10">
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
                onChange={handleSearchChange}
              />
            </div>
            <div>
              <Select value={prefecture} onValueChange={handlePrefectureChange}>
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
        ) : totalItems === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucune agence trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedAgencies?.map((agency) => (
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
                    <Button variant="outline" className="w-full justify-center">
                      Voir sur la carte
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Numeric Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mt-8">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setCurrentPage(p => Math.max(1, p - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                    className="hover:bg-primary/5 hover:text-primary"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  {getPageNumbers()[0] > 1 && (
                    <>
                      <Button
                        variant={currentPage === 1 ? "default" : "ghost"}
                        className={cn(
                          "w-10 h-10 p-0 hidden sm:flex",
                          currentPage === 1 ? "bg-primary text-white" : "hover:bg-primary/5 hover:text-primary"
                        )}
                        onClick={() => {
                          setCurrentPage(1);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        1
                      </Button>
                      <span className="text-gray-400 px-1 hidden sm:inline">...</span>
                    </>
                  )}

                  {getPageNumbers().map(pageNum => (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "ghost"}
                      className={cn(
                        "w-10 h-10 p-0",
                        currentPage === pageNum ? "bg-primary text-white" : "hover:bg-primary/5 hover:text-primary"
                      )}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {pageNum}
                    </Button>
                  ))}

                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                    <>
                      <span className="text-gray-400 px-1 hidden sm:inline">...</span>
                      <Button
                        variant={currentPage === totalPages ? "default" : "ghost"}
                        className={cn(
                          "w-10 h-10 p-0 hidden sm:flex",
                          currentPage === totalPages ? "bg-primary text-white" : "hover:bg-primary/5 hover:text-primary"
                        )}
                        onClick={() => {
                          setCurrentPage(totalPages);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setCurrentPage(p => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                    className="hover:bg-primary/5 hover:text-primary"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Affichage de {(currentPage - 1) * ITEMS_PER_PAGE + 1} à {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)} sur {totalItems} agences
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
