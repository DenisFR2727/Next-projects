import { TiShoppingCart } from "react-icons/ti";

import "./cart-products.scss";

export default function Cart() {
  return (
    <div className="cart">
      <TiShoppingCart className="cart-item cart-hover" />
    </div>
  );
}
