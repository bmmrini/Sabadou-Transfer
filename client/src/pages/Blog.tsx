import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useBlogPosts } from "@/hooks/use-blog";
import { Link } from "wouter";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function Blog() {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Blog & Actualités</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Restez informé sur les dernières nouvelles de Sabadou et nos conseils financiers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer group">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {post.coverImage ? (
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                        Pas d'image
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.publishedAt && format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: fr })}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                      Lire la suite <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}

            {/* Placeholder posts if empty for MVP visual */}
            {(!posts || posts.length === 0) && [1, 2, 3].map((i) => (
              <article key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
                <div className="h-48 bg-gray-100 relative">
                   {/* Abstract finance image */}
                   <img 
                    src={`https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&auto=format&fit=crop`} 
                    alt="Finance" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-24 h-4 bg-gray-100 rounded mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    Lancement de nouveaux guichets à Kankan
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm flex-1">
                    Sabadou continue son expansion avec l'ouverture de 5 nouveaux points de service dans la région de la Haute-Guinée pour mieux vous servir.
                  </p>
                  <span className="text-primary font-bold text-sm">Bientôt disponible</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
