"use client";
import { useMemo, useState } from "react";
import DinamicPanel from "./dinamic-panel/dinamic-panel";
import FilterPanel from "./filter/filter-panel";
import ProductList, { ProductListProps } from "./products-list";

export default function ProductsServices({ products }: ProductListProps) {
  const [serchProducts, setSearchProducts] = useState<string>("");

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
      <FilterPanel
        serchProducts={serchProducts}
        setSearchProducts={setSearchProducts}
      />
      <DinamicPanel lengItems={products} />
      <ProductList products={filteredProducts} />
    </div>
  );
}
