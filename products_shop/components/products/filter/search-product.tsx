"use client";
import { setSearchProducts } from "@/lib/features/products/filterProductsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function SearchProduct() {
  const dispatch = useAppDispatch();
  const serchProducts = useAppSelector(
    (state) => state.filterReducer.serchProducts
  );

  return (
    <div>
      <label htmlFor="">Serch Product</label>
      <input
        type="text"
        value={serchProducts}
        onChange={(e) => dispatch(setSearchProducts(e.target.value))}
        placeholder="Search products..."
      />
    </div>
  );
}
