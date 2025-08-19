"use client";
import { setSearchProducts } from "@/lib/features/products/filterProductsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function SearchProduct() {
  const dispatch = useAppDispatch();
  //  const serchProducts = useAppSelector(
  //    (state) => state.filterReducer.serchProducts
  //  );
  const [serchLocal, setSearchLocal] = useState<string>("");

  const changeSearch = (event: any) => {
    setSearchLocal(event.target.value);
  };

  return (
    <div>
      <label htmlFor="">Serch Product</label>
      {/* <input
        type="text"
        value={serchProducts}
        onChange={changeSearch}
        placeholder="Search products..."
      /> */}
    </div>
  );
}
