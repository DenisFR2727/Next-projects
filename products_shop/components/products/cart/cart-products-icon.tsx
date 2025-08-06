"use client";

import { TiShoppingCart } from "react-icons/ti";
import { IProducts } from "@/lib/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addProductToCart } from "@/lib/features/products/cartSlice";

import "./cart-products-icon.scss";

interface ProductCartProps {
  product: IProducts;
}

export default function Cart({ product }: ProductCartProps) {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector((state) =>
    state.cartReducer.cart.some((item) => item.id === product.id)
  );

  return (
    <div className="cart">
      <TiShoppingCart
        className={`cart-item cart-hover ${isInCart ? "disabled-cart" : ""}`}
        onClick={() => dispatch(addProductToCart(product))}
      />
    </div>
  );
}
