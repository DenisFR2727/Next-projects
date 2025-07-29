import { IProducts, IProductsResponse } from "@/lib/types";

type ProductListProps = {
  products: IProducts[];
};
export default function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products?.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  );
}
