import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    type?: "website" | "article";
}

export function SEO({
    title = "Sabadou Transfert - Transfert d'argent rapide et sécurisé en Guinée",
    description = "Le moyen le plus simple, rapide et sécurisé pour envoyer de l'argent partout en Guinée. Plus de 375 agences à votre service.",
    image = "/images/og-image.jpg",
    type = "website"
}: SEOProps) {
    const [location] = useLocation();
    const url = `https://sabadoutransfert.site${location}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`https://sabadoutransfert.site${image}`} />
            <meta property="og:locale" content="fr_GN" />
            <meta property="og:site_name" content="Sabadou Transfert" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`https://sabadoutransfert.site${image}`} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
