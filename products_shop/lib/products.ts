import { IProducts } from "./types";

export async function getProduct(id: string): Promise<IProducts> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
