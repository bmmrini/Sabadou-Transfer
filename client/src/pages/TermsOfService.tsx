import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, AlertCircle, Link as LinkIcon, Server, Cookie } from "lucide-react";

export default function TermsOfService() {
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
                            Conditions Générales d'Utilisation
                        </h1>
                        <p className="text-xl text-gray-600">
                            Conditions d'accès et d'utilisation du site sabadouservices.com
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
                                        <FileText className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                            Acceptation des Conditions
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            L'accès et l'utilisation par les internautes du site <strong>https://sabadouservices.com</strong> se fait sous réserve d'acceptation des conditions suivantes :
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Modifications */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Modifications des Conditions
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Sabadou Transfert se réserve la possibilité, compte tenu de l'évolution permanente d'Internet ainsi que des produits et tarifs, de modifier ou supprimer, à tout moment et sans préavis, les conditions d'utilisation proposées et les informations présentes sur le site <strong>https://sabadouservices.com</strong>.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Les utilisateurs du site <strong>sabadouservices.com</strong> sont donc invités à les consulter de manière régulière.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    La consultation de ce site internet implique l'acceptation des conditions d'utilisation. L'utilisateur du site reconnaît qu'il fait usage sous sa seule responsabilité des informations présentes sur le site <strong>https://sabadouservices.com</strong>.
                                </p>
                            </div>

                            {/* Information */}
                            <div className="border-t border-gray-200 pt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                    Informations Mises à Disposition
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Les informations fournies sur le site <strong>sabadouservices.com</strong> le sont à titre purement informatif, indicatif et constituent une présentation des produits et services conçus par Sabadou Transfert.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Par conséquent, les informations diffusées sur le site ne doivent en aucun cas être interprétées comme un démarchage et ne constituent pas non plus une offre de services et/ou de produits de Sabadou Transfert ou de toute autre société mentionnée sur le site.
                                </p>
                            </div>

                            {/* Responsibility */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                        <AlertCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Responsabilité et Limitation de Responsabilité
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Sabadou Transfert fournit les informations diffusées sur le site <strong>sabadouservices.com</strong> à des fins purement informatives. Sabadou Transfert mettra tout en œuvre pour que ces informations soient actualisées, exhaustives et licites, mais ne donne aucune garantie à ce titre.
                                    </p>
                                    <p>
                                        En conséquence, ni Sabadou Transfert, ni aucune autre partie impliquée dans le processus de création et d'exploitation de ce site ne pourront être tenues responsables de quelque dommage que ce soit causé par l'accès, l'utilisation ou l'impossibilité d'accès ou d'utilisation de ce site ou par toute erreur ou omission dans son contenu.
                                    </p>

                                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
                                        <h3 className="font-bold text-gray-900 mb-3">Sabadou Transfert décline sa responsabilité pour :</h3>
                                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                                            <li>Toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                                            <li>Tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations ou éléments mis à disposition sur le site</li>
                                            <li>Toute détérioration ou virus qui pourraient affecter l'équipement informatique de l'utilisateur</li>
                                            <li>Plus généralement pour tout dommage direct ou indirect, quelles qu'en soient les causes, origines, nature ou conséquences, provoqué par l'accès de quiconque au site internet ou de l'impossibilité d'y accéder</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Hyperlinks */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        <LinkIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Liens Hypertextes
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Le site <strong>https://sabadouservices.com</strong> peut inclure des liens hypertextes vers des sites tiers présents sur le réseau Internet. Sabadou Transfert ne peut contrôler la nature ou le contenu des ressources constituées par ces sites tiers.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    En conséquence, la responsabilité de Sabadou Transfert ne saurait être engagée concernant un site tiers auquel l'utilisateur aurait accès via le site <strong>https://sabadouservices.com</strong>.
                                </p>
                            </div>

                            {/* Availability */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Server className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Disponibilité et Maintenance du Site
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Sabadou Transfert s'efforce de maintenir l'accès à ce site, sans pour autant être tenue à aucune obligation d'y parvenir. Sabadou Transfert pourra, à tout moment, modifier ou interrompre, temporairement ou de façon permanente, tout ou partie de son site pour effectuer des opérations de maintenance, des améliorations ou des modifications.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Le fonctionnement du site peut être affecté par des événements ou des éléments que Sabadou Transfert ne peut contrôler.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                        <Cookie className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                                            Cookies
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        L'utilisation des fonctionnalités du site <strong>https://sabadouservices.com</strong> peut nécessiter la mise en place de cookies. Un cookie est un petit fichier texte enregistré sur le terminal informatique d'un internaute à la demande du serveur gérant le site Web visité. Il contient des informations sur la navigation effectuée sur les pages de ce site.
                                    </p>
                                    <p>
                                        Le site <strong>https://sabadouservices.com</strong> utilise des cookies pour mémoriser les préférences choisies par un utilisateur lors de sa visite ainsi que pour des besoins statistiques et de mesure d'audience. Les cookies ne sont en aucun cas utilisés par Sabadou Transfert pour vous identifier et n'ont aucunement pour objet de traiter et exploiter vos données personnelles.
                                    </p>
                                    <p>
                                        En acceptant les conditions générales et en poursuivant votre navigation sur le site <strong>https://sabadouservices.com</strong>, vous, utilisateur du site, acceptez le dépôt de cookies sur votre terminal.
                                    </p>
                                    <p className="font-semibold">
                                        L'utilisateur du site peut refuser à tout moment l'installation des cookies sur son terminal informatique en sélectionnant les paramètres appropriés de son navigateur ; ceci n'affectera en aucun cas la navigation sur le site.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
