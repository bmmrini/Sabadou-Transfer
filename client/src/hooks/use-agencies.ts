import { useQuery } from "@tanstack/react-query";
import { AGENCIES_DATA, Agency } from "@/data/agencies-data";

// Compatibility interface to match what the component expects
// It seems the component expects `address` and `city`
interface AgencyView extends Agency {
  address: string;
  city: string;
}

export function useAgencies(filters?: { search?: string; prefecture?: string }) {
  return useQuery({
    queryKey: ["agencies", filters],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      let data = AGENCIES_DATA.map(a => ({
        ...a,
        address: a.location || a.prefecture, // Fallback location
        city: a.prefecture
      }));

      if (filters?.prefecture && filters.prefecture !== "all") {
        data = data.filter(a =>
          a.prefecture.toLowerCase() === filters.prefecture!.toLowerCase()
        );
      }

      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        data = data.filter(a =>
          a.name.toLowerCase().includes(searchLower) ||
          a.location.toLowerCase().includes(searchLower) ||
          a.prefecture.toLowerCase().includes(searchLower)
        );
      }

      return data;
    },
  });
}

export function useAgency(id: number) {
  return useQuery({
    queryKey: ["agency", id],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const agency = AGENCIES_DATA.find(a => a.id === id);
      if (!agency) return null;
      return {
        ...agency,
        address: agency.location,
        city: agency.prefecture
      };
    },
  });
}
