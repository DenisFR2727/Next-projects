import { IProducts } from "./types";

export async function getProduct(id: number): Promise<IProducts | null> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function getProducts(): Promise<{ products: IProducts[] }> {
  const res = await fetch(`https://dummyjson.com/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
