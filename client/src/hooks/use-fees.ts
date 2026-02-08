import { useMutation } from "@tanstack/react-query";
import { api, type CalculateFeeRequest } from "@shared/routes";

export function useCalculateFee() {
  return useMutation({
    mutationFn: async (data: CalculateFeeRequest) => {
      const res = await fetch(api.fees.calculate.path, {
        method: api.fees.calculate.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to calculate fee");
      }

      return api.fees.calculate.responses[200].parse(await res.json());
    },
  });
}
