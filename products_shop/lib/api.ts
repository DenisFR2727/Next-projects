"use server";
import { IProducts, UnsPlash } from "./types";

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

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

export async function getPhotos(page = 1, perPage = 9): Promise<UnsPlash[]> {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}&page=${page}&per_page=${perPage}`
  );
  if (!res.ok) throw new Error("Failed to fetch photos");
  return res.json();
}
