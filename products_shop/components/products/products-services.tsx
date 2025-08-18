"use client";
import { useMemo } from "react";
import DinamicPanel from "./dinamic-panel/dinamic-panel";
import FilterPanel from "./filter/filter-panel";
import ProductList, { ProductListProps } from "./products-list";
import { useAppSelector } from "@/lib/hooks";

export default function ProductsServices({ products }: ProductListProps) {
  const serchProducts = useAppSelector(
    (state) => state.filterReducer.serchProducts
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (serchProducts) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(serchProducts.toLowerCase())
      );
    }
    return result;
  }, [products, serchProducts]);

  return (
    <div className="products_list">
      <FilterPanel />
      <DinamicPanel lengItems={products} />
      <ProductList products={filteredProducts} />
    </div>
  );
}
