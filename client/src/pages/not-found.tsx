import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center mb-4 gap-2">
            <AlertCircle className="h-12 w-12 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Page Non Trouvée</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="mt-6">
            <Link href="/">
              <Button>Retour à l'accueil</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
