import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactMessage) {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="page-header-soft py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 page-header-soft-overlay"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-gray-900">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">Coordonnées</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">Siège Social</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Marché Sogbè immeuble bourlaye Nabé<br />
                        Kankan<br />
                        République de Guinée
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">Téléphone</h4>
                      <div className="text-gray-600 text-sm mt-1 space-y-1">
                        <a href="tel:+224620595983" className="block hover:text-primary transition-colors">+224 620 59 59 83</a>
                        <a href="tel:+224612710861" className="block hover:text-primary transition-colors">+224 612 71 08 61</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <a href="mailto:central@sabadouservices.com" className="text-gray-600 text-sm mt-1 block hover:text-primary transition-colors">
                        central@sabadouservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">Heures d'ouverture</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Lundi - Samedi: 8h00 - 18h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Envoyez-nous un message</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom complet</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} className="h-12 bg-gray-50 border-gray-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="votre@email.com" {...field} className="h-12 bg-gray-50 border-gray-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="+224..." {...field} value={field.value || ''} className="h-12 bg-gray-50 border-gray-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sujet</FormLabel>
                            <FormControl>
                              <Input placeholder="L'objet de votre message" {...field} className="h-12 bg-gray-50 border-gray-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Comment pouvons-nous vous aider ?" {...field} className="min-h-[150px] bg-gray-50 border-gray-200 resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" disabled={isPending} size="lg" className="w-full md:w-auto min-w-[200px] h-12 text-base shadow-lg shadow-primary/25">
                      {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                        <>
                          Envoyer le message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
