import ProductsServices from "@/components/products/products-services";
import { getProducts } from "@/lib/products";
import AutoOpenSaleModal from "@/components/modals/auto-sale";

export default async function ProductsPage({ modal }: any) {
  const response = await getProducts();
  const data = response.products;

  return (
    <>
      <ProductsServices products={data} />
      <AutoOpenSaleModal delay={2000} />
      {modal}
    </>
  );
}
