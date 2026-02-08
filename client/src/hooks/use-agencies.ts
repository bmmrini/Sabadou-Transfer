import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useAgencies(filters?: { search?: string; prefecture?: string }) {
  return useQuery({
    queryKey: [api.agencies.list.path, filters],
    queryFn: async () => {
      let url = api.agencies.list.path;
      if (filters) {
        const params = new URLSearchParams();
        if (filters.search) params.append("search", filters.search);
        if (filters.prefecture) params.append("prefecture", filters.prefecture);
        url += `?${params.toString()}`;
      }
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch agencies");
      return api.agencies.list.responses[200].parse(await res.json());
    },
  });
}

export function useAgency(id: number) {
  return useQuery({
    queryKey: [api.agencies.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.agencies.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch agency");
      return api.agencies.get.responses[200].parse(await res.json());
    },
  });
}
