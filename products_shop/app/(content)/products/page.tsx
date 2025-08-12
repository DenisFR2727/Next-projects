import DinamicPanel from "@/components/products/dinamic-panel/dinamic-panel";
import ProductList from "@/components/products/products-list";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const response = await getProducts();
  const data = response.products;

  return (
    <div className="products_list">
      <DinamicPanel lengItems={data} />
      <ProductList products={data} />
    </div>
  );
}
