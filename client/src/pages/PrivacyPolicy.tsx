import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPolicy() {
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
                            Politique de Confidentialité
                        </h1>
                        <p className="text-xl text-gray-600">
                            Protection et traitement de vos données personnelles
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 space-y-8">

                            {/* Introduction */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                            Notre Engagement
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Sabadou Transfert s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles avec le plus grand soin. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Data Collection */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Database className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Collecte des Données
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Lors de votre utilisation du site <strong>sabadouservices.com</strong>, nous pouvons collecter les types de données suivants :
                                    </p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                                        <li><strong>Données de transaction :</strong> informations relatives aux transferts d'argent effectués</li>
                                        <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                                        <li><strong>Données de localisation :</strong> ville, pays (pour localiser l'agence la plus proche)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Data Usage */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Eye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Utilisation des Données
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>Les données collectées sont utilisées pour :</p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li>Traiter vos demandes de transfert d'argent</li>
                                        <li>Vous fournir des informations sur nos services</li>
                                        <li>Améliorer la qualité de nos services et l'expérience utilisateur</li>
                                        <li>Répondre à vos questions et demandes de support</li>
                                        <li>Respecter nos obligations légales et réglementaires</li>
                                        <li>Prévenir la fraude et garantir la sécurité des transactions</li>
                                        <li>Réaliser des analyses statistiques et des études de marché</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Data Protection */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Lock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Protection des Données
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Sabadou Transfert met en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                                    </p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li>L'accès non autorisé</li>
                                        <li>La divulgation accidentelle ou illicite</li>
                                        <li>La modification, la perte ou la destruction</li>
                                        <li>Toute autre forme de traitement illicite</li>
                                    </ul>
                                    <p className="mt-4">
                                        Nos systèmes sont régulièrement mis à jour et audités pour garantir le plus haut niveau de sécurité.
                                    </p>
                                </div>
                            </div>

                            {/* Data Sharing */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                                        <UserCheck className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Partage des Données
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Sabadou Transfert ne vend, ne loue ni ne partage vos données personnelles avec des tiers à des fins commerciales.
                                    </p>
                                    <p>
                                        Vos données peuvent être partagées uniquement dans les cas suivants :
                                    </p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li>Avec nos partenaires de confiance nécessaires à l'exécution des services (agences partenaires, prestataires de paiement)</li>
                                        <li>Avec les autorités compétentes lorsque la loi l'exige</li>
                                        <li>Pour protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux de nos utilisateurs</li>
                                    </ul>
                                </div>
                            </div>

                            {/* User Rights */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                        <FileText className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Vos Droits
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li><strong>Droit d'accès :</strong> vous pouvez demander l'accès à vos données personnelles</li>
                                        <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de données inexactes</li>
                                        <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
                                        <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
                                        <li><strong>Droit à la portabilité :</strong> vous pouvez demander le transfert de vos données</li>
                                        <li><strong>Droit de limitation :</strong> vous pouvez demander la limitation du traitement</li>
                                    </ul>
                                    <p className="mt-4">
                                        Pour exercer ces droits, contactez-nous à l'adresse : <a href="mailto:central@sabadouservices.com" className="text-primary hover:underline">central@sabadouservices.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Data Retention */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Conservation des Données
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales et réglementaires applicables en Guinée.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Les données de transaction sont conservées pendant une période minimale de 5 ans pour répondre aux exigences légales en matière de lutte contre le blanchiment d'argent et le financement du terrorisme.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Cookies et Technologies Similaires
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies ne sont en aucun cas utilisés pour vous identifier personnellement et n'ont pas pour objet de traiter et exploiter vos données personnelles à des fins commerciales.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                                </p>
                            </div>

                            {/* Updates */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Modifications de la Politique
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Sabadou Transfert se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous protégeons vos données.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="border-t border-gray-200 pt-8 bg-primary/5 rounded-xl p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Nous Contacter
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
                                </p>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Email :</strong> <a href="mailto:central@sabadouservices.com" className="text-primary hover:underline">central@sabadouservices.com</a></p>
                                    <p><strong>Téléphone :</strong> <a href="tel:+224661218121" className="text-primary hover:underline">+224 661 218 121</a></p>
                                    <p><strong>Adresse :</strong> Marché Sogbè, immeuble Bourlaye Nabé, Kankan, Guinée</p>
                                </div>
                            </div>

                            <div className="text-sm text-gray-500 text-center pt-8 border-t border-gray-200">
                                Dernière mise à jour : Février 2026
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
