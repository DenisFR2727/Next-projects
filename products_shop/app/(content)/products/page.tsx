import ProductList from "@/components/products/products-list";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  await new Promise((res) => setTimeout(res, 2000));

  const response = await getProducts();
  const data = response.products;

  return (
    <div className="products_list">
      <ProductList products={data} />
    </div>
  );
}
