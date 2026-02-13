import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server } from "lucide-react";

export default function Security() {
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
                            Sécurité
                        </h1>
                        <p className="text-xl text-gray-600">
                            Votre sécurité est notre priorité absolue
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
                                            Notre Engagement Sécurité
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Chez Sabadou Transfert, la sécurité de vos transactions et la protection de vos données personnelles sont au cœur de nos préoccupations. Nous mettons en œuvre les meilleures pratiques et technologies pour garantir la sécurité de nos services.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Transaction Security */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Lock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Sécurité des Transactions
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Chaque transaction effectuée via Sabadou Transfert bénéficie de multiples niveaux de sécurité :
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <h3 className="font-bold text-gray-900">Codes de sécurité uniques</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Chaque transfert génère un code unique et sécurisé pour le retrait
                                            </p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <h3 className="font-bold text-gray-900">Vérification d'identité</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Contrôle systématique de l'identité du bénéficiaire avant tout retrait
                                            </p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <h3 className="font-bold text-gray-900">Traçabilité complète</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Suivi en temps réel de toutes les transactions
                                            </p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <h3 className="font-bold text-gray-900">Personnel formé</h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Nos agents sont formés aux procédures de sécurité strictes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Data Protection */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Server className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Protection des Données
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Vos informations personnelles sont protégées par des mesures de sécurité avancées :
                                    </p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li><strong>Chiffrement des données :</strong> Toutes les données sensibles sont chiffrées lors de leur transmission et stockage</li>
                                        <li><strong>Accès restreint :</strong> Seul le personnel autorisé a accès aux informations clients</li>
                                        <li><strong>Serveurs sécurisés :</strong> Nos serveurs sont protégés par des pare-feu et des systèmes de détection d'intrusion</li>
                                        <li><strong>Sauvegardes régulières :</strong> Vos données sont sauvegardées quotidiennement pour prévenir toute perte</li>
                                        <li><strong>Conformité réglementaire :</strong> Respect strict des normes de protection des données en vigueur</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Fraud Prevention */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Eye className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Prévention de la Fraude
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Sabadou Transfert dispose de systèmes sophistiqués pour détecter et prévenir les activités frauduleuses :
                                    </p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li>Surveillance continue des transactions suspectes</li>
                                        <li>Système d'alerte automatique pour les activités inhabituelles</li>
                                        <li>Vérification renforcée pour les transactions importantes</li>
                                        <li>Collaboration avec les autorités compétentes</li>
                                        <li>Formation continue du personnel sur la détection de fraude</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Security Tips */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center shrink-0">
                                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Conseils de Sécurité
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>Pour garantir la sécurité de vos transactions, nous vous recommandons de :</p>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="text-yellow-600 font-bold">•</span>
                                            <p><strong>Ne jamais partager votre code de retrait</strong> avec des personnes non autorisées</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-yellow-600 font-bold">•</span>
                                            <p><strong>Vérifier l'identité du bénéficiaire</strong> avant d'effectuer un transfert</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-yellow-600 font-bold">•</span>
                                            <p><strong>Conserver vos reçus</strong> jusqu'à confirmation du retrait</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-yellow-600 font-bold">•</span>
                                            <p><strong>Signaler immédiatement</strong> toute activité suspecte à nos agences</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-yellow-600 font-bold">•</span>
                                            <p><strong>Utiliser uniquement les agences officielles</strong> Sabadou Transfert</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-yellow-600 font-bold">•</span>
                                            <p><strong>Ne jamais effectuer de transfert</strong> pour des personnes inconnues</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Compliance */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Conformité Réglementaire
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Sabadou Transfert respecte scrupuleusement les réglementations en vigueur en Guinée, notamment :
                                    </p>
                                    <ul className="space-y-2 list-disc list-inside ml-4">
                                        <li>Lutte contre le blanchiment d'argent (LBC/FT)</li>
                                        <li>Connaissance du client (KYC - Know Your Customer)</li>
                                        <li>Protection des données personnelles</li>
                                        <li>Réglementations de la Banque Centrale de la République de Guinée (BCRG)</li>
                                    </ul>
                                    <p className="mt-4">
                                        Nous collaborons activement avec les autorités de régulation pour maintenir les plus hauts standards de sécurité et de conformité.
                                    </p>
                                </div>
                            </div>

                            {/* Incident Response */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Gestion des Incidents
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        En cas de problème de sécurité ou de suspicion de fraude :
                                    </p>
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                        <h3 className="font-bold text-gray-900 mb-3">Contactez-nous immédiatement :</h3>
                                        <div className="space-y-2">
                                            <p><strong>Téléphone d'urgence :</strong> <a href="tel:+224661218121" className="text-primary hover:underline">+224 661 218 121</a></p>
                                            <p><strong>Email :</strong> <a href="mailto:central@sabadouservices.com" className="text-primary hover:underline">central@sabadouservices.com</a></p>
                                            <p><strong>Disponibilité :</strong> 24/7 pour les urgences de sécurité</p>
                                        </div>
                                    </div>
                                    <p className="mt-4">
                                        Notre équipe de sécurité traitera votre demande en priorité et prendra les mesures nécessaires pour protéger vos intérêts.
                                    </p>
                                </div>
                            </div>

                            {/* Continuous Improvement */}
                            <div className="border-t border-gray-200 pt-8 bg-primary/5 rounded-xl p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Amélioration Continue
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    La sécurité est un processus continu. Sabadou Transfert investit constamment dans de nouvelles technologies et formations pour rester à la pointe de la sécurité des transferts d'argent. Nos systèmes sont régulièrement audités et mis à jour pour faire face aux menaces émergentes.
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
