"use client";
import { IProducts } from "@/lib/types";
import { useEffect, useState } from "react";

interface ProductsProps {
  products: IProducts[];
}
export default function SlideProducts({ products }: ProductsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = index;
      let attempts = 0;

      do {
        nextIndex = (nextIndex + 1) % products.length;
        attempts++;
      } while (
        (!products[nextIndex]?.thumbnail ||
          products[nextIndex].thumbnail === "") &&
        attempts < products.length
      );

      setIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, products]);

  const current = products[index];

  return (
    <>
      {current.thumbnail ? (
        <img
          style={{ width: "500px", height: "500px" }}
          src={current.thumbnail}
          alt="Product image"
        />
      ) : null}
    </>
  );
}
