import { useQuery } from "@tanstack/react-query";
import { menuData, type MenuItem } from "@/data/menu";

export function useMenu() {
  return useQuery({
    queryKey: ["/api/menu"],
    queryFn: async () => {
      // Return static data immediately
      return menuData;
    },
  });
}

export function useMenuItem(id: number) {
  return useQuery({
    queryKey: [`/api/menu/${id}`],
    queryFn: async () => {
      const item = menuData.find((i) => Number(i.id) === id);
      if (!item) throw new Error("Item not found");
      return item;
    },
  });
}
