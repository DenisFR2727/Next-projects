"use client";

import DinamicPanel from "./dinamic-panel/dinamic-panel";
import FilterPanel from "./filter/filter-panel";
import ProductList, { ProductListProps } from "./products-list";
import PaginationList from "./pagination/pagination ";
import { useFilterProducts } from "./filter/hooks";

export default function ProductsServices({ products }: ProductListProps) {
  const { filteredProducts } = useFilterProducts(products);

  return (
    <div className="products_list">
      <FilterPanel products={products} />
      <DinamicPanel lengItems={filteredProducts} />

      <PaginationList products={filteredProducts} />
    </div>
  );
}
