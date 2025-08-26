import ProductsServices from "@/components/products/products-services";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const response = await getProducts();
  const data = response.products;

  return <ProductsServices products={data} />;
}
