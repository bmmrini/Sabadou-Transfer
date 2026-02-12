import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useBlogPost } from "@/hooks/use-blog";
import { Calendar, Loader2, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link, useRoute } from "wouter";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const { data: post, isLoading } = useBlogPost(params?.slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog">
            <a className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <article className="flex-1">
        {/* Header */}
        <div className="bg-gray-50 py-12 md:py-20 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/blog">
              <a className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
              </a>
            </Link>
            
            <div className="flex items-center text-sm text-primary font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {post.publishedAt && format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: fr })}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-display mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Featured Image */}
        {post.coverImage && (
          <div className="max-w-5xl mx-auto px-4 -mt-8 md:-mt-12 mb-12">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 pb-24">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl">
            {post.content.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
