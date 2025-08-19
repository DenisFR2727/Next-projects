"use client";
import { useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";

export function useFilterProducts(products: any) {
  const serchProducts = useAppSelector(
    (state) => state.filterReducer.serchProducts
  );
  const selectedCategory = useAppSelector(
    (state) => state.filterReducer.selectedCategory
  );
  const selectedRange = useAppSelector(
    (state) => state.filterReducer.rangePrice
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (serchProducts) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(serchProducts.toLowerCase())
      );
    }
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedRange) {
      result = result.filter((p) => p.price <= selectedRange);
    }
    return result;
  }, [products, serchProducts, selectedRange, selectedCategory]);

  return { filteredProducts };
}
