import { IProducts } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: IProducts;
};
import "./product-card.scss";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card-product">
      <Link href={`/products/${product.id}`}>
        <Image
          className="card-product-img"
          src={product.thumbnail}
          width={250}
          height={250}
          alt={product.title}
        />
      </Link>
      <h2>
        {product.title.split(" ").length > 2
          ? product.title.split(" ").slice(0, 2).join(" ") + "..."
          : product.title}
      </h2>
      <p className="card-product-price">{product.price} $</p>
    </div>
  );
}
