"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "./style.scss";
import { amountToPriceProduct } from "@/lib/features/products/cartSlice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.cartReducer.cart);
  const totalPrice = useAppSelector((state) => state.cartReducer.totalPrice);

  return (
    <>
      {orders.length === 0 ? (
        <div className="cart">
          <h1>You Cart Is Empty</h1>
          <span className="cart-line"></span>
        </div>
      ) : (
        <div className="cart">
          <h1>Shopping Cart</h1>
          <span className="cart-line"></span>
          <div className="cart-items-block">
            <ul className="cart-order">
              {orders.map((order) => (
                <li key={order.id}>
                  <div className="order-img">
                    <img src={order?.thumbnail} alt={order.title} />
                  </div>
                  <div className="order-title">
                    <h2>{order.title}</h2>
                    <span className="order-title-item">{order.brand}</span>
                    <span className="order-title-item">{order.category}</span>
                  </div>
                  <div className="amount-price-block">
                    <div className="order-amount">
                      <h2>Amount</h2>
                      <select
                        value={order.amount}
                        className="order-amount-item order-select"
                        onChange={(e) =>
                          dispatch(
                            amountToPriceProduct({
                              id: order.id,
                              amount: Number(e.target.value),
                            })
                          )
                        }
                      >
                        {Array.from(
                          { length: order.stock },
                          (_, index) => index + 1
                        ).map((n, i) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <button className="order-amount-item order-remove">
                        remove
                      </button>
                    </div>
                    <div className="order-price">
                      <span className="order-price-item">$ {order.price}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="order-total">
              <div className="order-total-border">
                <p className="subtotal ">
                  <span>Subtotal</span>
                  <span>$1200</span>
                </p>
                <p className="shipping shipping-line">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </p>
                <p className="tax tax-line">
                  <span>Tax</span>
                  <span>$129.99</span>
                </p>
                <p className="order-total-sum total-line">
                  <span>Order Total</span>
                  <span>$ {totalPrice.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
