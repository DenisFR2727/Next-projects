import ProductList from "@/components/products/products-list";

export default async function ProductsPage() {
  const response = await fetch("https://dummyjson.com/products");
  await new Promise((res) => setTimeout(res, 2000));
  const data = await response.json();

  return (
    <div>
      <ProductList products={data.products} />
    </div>
  );
}
