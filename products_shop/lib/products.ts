import { IProducts } from "./types";

export async function getProduct(id: number): Promise<IProducts | null> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}
