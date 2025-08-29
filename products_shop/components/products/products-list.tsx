"use client";
import { IProducts } from "@/lib/types";
import ProductCard from "./product-card";
import { useAppSelector } from "@/lib/hooks";
import "./products-list.scss";

export type ProductListProps = {
  products: IProducts[];
  listRef: React.RefObject<HTMLUListElement>;
};
export default function ProductList({
  products,
}: Omit<ProductListProps, "listRef">) {
  const isToggle = useAppSelector((state) => state.cartReducer.togglePanel);

  if (products.length === 0) {
    return <p>Not found Products!</p>;
  }
  return (
    <ul className={"products-items"}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} isToggle={isToggle} />
      ))}
    </ul>
  );
}
