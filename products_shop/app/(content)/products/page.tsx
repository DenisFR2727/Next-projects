import DinamicPanel from "@/components/products/dinamic-panel/dinamic-panel";
import FilterPanel from "@/components/products/filter/filter-panel";
import ProductsServices from "@/components/products/products-services";
import ProductList from "@/components/products/products-list";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const response = await getProducts();
  const data = response.products;

  return <ProductsServices products={data} />;
}
