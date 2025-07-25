// ProductList.tsx
"use client";

import { useGetProductsQuery } from "@/lib/features/products/api/productsApi";

export default function ProductList() {
  const { data, isLoading, error } = useGetProductsQuery();

  //   if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error fetching products</p>;

  return (
    <ul>{data?.map((product) => <li key={product.id}>{product.title}</li>)}</ul>
  );
}
