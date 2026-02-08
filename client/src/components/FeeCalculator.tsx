import { useState } from "react";
import { useCalculateFee } from "@/hooks/use-fees";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { ArrowRight, Calculator, Loader2, Coins } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FeeCalculator({ variant = "default" }: { variant?: "default" | "card" }) {
  const [amount, setAmount] = useState<string>("");
  const { mutate, isPending, data, reset } = useCalculateFee();
  const { t } = useLocale();

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;
    mutate({ amount: Number(amount) });
  };

  const handleReset = () => {
    setAmount("");
    reset();
  };

  const isCard = variant === "card";

  return (
    <div className={`
      relative overflow-hidden
      ${isCard 
        ? "bg-white rounded-2xl p-6 shadow-xl border border-gray-100" 
        : "bg-transparent"
      }
    `}>
      {isCard && (
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Coins className="w-24 h-24 text-primary" />
        </div>
      )}

      <h3 className={`font-display font-bold mb-6 ${isCard ? "text-2xl text-gray-900" : "text-3xl text-white"}`}>
        {t('calc.title')}
      </h3>

      <form onSubmit={handleCalculate} className="space-y-4 relative z-10">
        <div className="space-y-2">
          <label className={`text-sm font-medium ${isCard ? "text-gray-700" : "text-white/90"}`}>
            {t('calc.amount_label')}
          </label>
          <div className="relative">
            <Input
              type="number"
              placeholder="Ex: 500000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`
                h-14 text-lg pl-4 pr-16 rounded-xl border-2 transition-all
                focus:ring-4 focus:ring-primary/20
                ${isCard 
                  ? "bg-gray-50 border-gray-200 focus:border-primary text-gray-900 placeholder:text-gray-400" 
                  : "bg-white/10 border-white/20 focus:border-white text-white placeholder:text-white/50"
                }
              `}
            />
            <div className={`absolute right-4 top-1/2 -translate-y-1/2 font-bold ${isCard ? "text-gray-400" : "text-white/60"}`}>
              GNF
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!data ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Button 
                type="submit" 
                disabled={isPending || !amount}
                className={`
                  w-full h-14 rounded-xl text-lg font-bold shadow-lg transition-all
                  ${isCard 
                    ? "bg-primary text-white hover:bg-primary/90 shadow-primary/25" 
                    : "bg-white text-primary hover:bg-white/90 shadow-black/10"
                  }
                `}
              >
                {isPending ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    {t('calc.button')} <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`
                p-6 rounded-xl space-y-4 border-2
                ${isCard 
                  ? "bg-secondary/5 border-secondary/20" 
                  : "bg-white/10 border-white/20 backdrop-blur-sm"
                }
              `}
            >
              <div className="flex justify-between items-center pb-3 border-b border-dashed border-current/20">
                <span className={`text-sm ${isCard ? "text-gray-600" : "text-white/80"}`}>{t('calc.fee_label')}</span>
                <span className={`text-xl font-bold ${isCard ? "text-gray-900" : "text-white"}`}>
                  {data.fee.toLocaleString()} GNF
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-sm font-bold ${isCard ? "text-gray-900" : "text-white"}`}>{t('calc.total_label')}</span>
                <span className={`text-2xl font-bold ${isCard ? "text-primary" : "text-secondary"}`}>
                  {data.total.toLocaleString()} GNF
                </span>
              </div>

              <Button 
                onClick={handleReset}
                variant="ghost"
                className={`w-full hover:bg-transparent hover:underline ${isCard ? "text-gray-500" : "text-white/70"}`}
              >
                Nouvelle simulation
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className={`text-xs text-center mt-4 ${isCard ? "text-gray-400" : "text-white/40"}`}>
          {t('calc.disclaimer')}
        </p>
      </form>
    </div>
  );
}
