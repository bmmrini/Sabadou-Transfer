import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Phone, MapPin } from "lucide-react";

export default function LegalNotice() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-1 bg-gray-50">
                {/* Hero Section */}
                {/* Hero Section */}
                <section className="page-header-soft py-16 relative overflow-hidden">
                    <div className="absolute inset-0 page-header-soft-overlay"></div>
                    <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-gray-900">
                            Mentions Légales
                        </h1>
                        <p className="text-xl text-gray-600">
                            Informations légales concernant Sabadou Transfert
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 space-y-8">

                            {/* Company Information */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                            Informations sur la société
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            <strong>Sabadou Transfert</strong> est une société à responsabilité limitée (S.A.R.L) au capital de <strong>1.500.000.000 GNF</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Siège social</h3>
                                            <p className="text-gray-600">
                                                Marché Sogbè, immeuble Bourlaye Nabé<br />
                                                Kankan, Guinée
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+224661218121" className="hover:text-primary transition-colors">
                                                    +224 661 218 121
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Fax</h3>
                                            <p className="text-gray-600">+224 669 566 152</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Propriété Industrielle et Commerciale
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Ce site appartient à <strong>Sabadou Transfert</strong>. Les éléments contenus dans ce site sont la propriété exclusive de Sabadou Transfert.
                                    </p>
                                    <p>
                                        Les marques, logos, visuels, produits, images et spots publicitaires apparaissant sur le site sont protégés par les lois en vigueur sur la propriété industrielle et commerciale, et appartiennent à Sabadou Transfert et au groupe SO.SA.C.I.E Guinée, ou font l'objet d'une autorisation d'utilisation par les partenaires de Sabadou Transfert.
                                    </p>
                                    <p>
                                        Toute utilisation est soumise à l'accord préalable de Sabadou Transfert. Toute utilisation non autorisée constitue une contrefaçon. Sabadou Transfert se réserve le droit de poursuivre tout acte de contrefaçon de ses droits de propriété industrielle et commerciale conformément aux dispositions de la loi relative à la protection de la propriété industrielle et commerciale.
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        Sont expressément interdits : toute reproduction, représentation, adaptation, exploitation, distribution, diffusion, utilisation commerciale, traduction, arrangement ou transformation de tout ou partie des contenus ou tout autre élément figurant sur le site sur quelque support que ce soit et par tout procédé que ce soit.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Ces agissements sont susceptibles de constituer des actes de contrefaçon sanctionnés pénalement et civilement, et engagent la responsabilité de leur auteur.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Hébergement du site
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Le site <strong>sabadouservices.com</strong> est hébergé par des services d'hébergement web professionnels garantissant la sécurité et la disponibilité du site.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
