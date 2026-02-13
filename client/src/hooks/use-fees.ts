import { useMutation } from "@tanstack/react-query";
import { type CalculateFeeRequest, type CalculateFeeResponse } from "@shared/schema";

// Static fee tiers for frontend-only calculation (fallback)
const FEE_TIERS = [
  { min: 0, max: 100000, fee: 2000 },
  { min: 100001, max: 500000, fee: 5000 },
  { min: 500001, max: 1000000, fee: 10000 },
  { min: 1000001, max: 2000000, fee: 15000 },
  { min: 2000001, max: 5000000, fee: 30000 },
  { min: 5000001, max: 10000000, fee: 50000 },
  { min: 10000001, max: 20000000, fee: 80000 },
  { min: 20000001, max: 50000000, fee: 150000 },
  { min: 50000001, max: Infinity, fee: 0.01 } // 1% for very high amounts
];

function calculateLocalFee(amount: number): CalculateFeeResponse {
  const tier = FEE_TIERS.find(t => amount >= t.min && amount <= t.max);
  let fee = 0;

  if (tier) {
    if (tier.fee < 1) {
      // It's a percentage
      fee = Math.ceil(amount * tier.fee);
    } else {
      fee = tier.fee;
    }
  } else {
    // Default 1%
    fee = Math.ceil(amount * 0.01);
  }

  return {
    amount,
    fee,
    total: amount + fee
  };
}

export function useCalculateFee() {
  return useMutation({
    mutationFn: async (data: CalculateFeeRequest) => {
      try {
        const res = await fetch("/api/fees/calculate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Backend unreachable");
        }

        const result = await res.json();
        return result as CalculateFeeResponse;
      } catch (error) {
        console.warn("Using client-side calculation fallback:", error);
        // Fallback to local calculation if backend is down
        return new Promise<CalculateFeeResponse>((resolve) => {
          setTimeout(() => {
            resolve(calculateLocalFee(data.amount));
          }, 300); // Simulate network delay
        });
      }
    },
  });
}
