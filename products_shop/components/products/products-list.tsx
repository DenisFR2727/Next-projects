"use client";
import { IProducts } from "@/lib/types";
import ProductCard from "./product-card";
import { useAppSelector } from "@/lib/hooks";
import "./products-list.scss";

type ProductListProps = {
  products: IProducts[];
};
export default function ProductList({ products }: ProductListProps) {
  const isToggle = useAppSelector((state) => state.cartReducer.togglePanel);

  return (
    <ul className={"products-items"}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} isToggle={isToggle} />
      ))}
    </ul>
  );
}
