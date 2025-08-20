import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import DeteilsNav from "@/components/products/deteils-nav";

import "./details-product.scss";
import Cart from "@/components/products/cart/cart-products-icon";
import AddToCart from "@/components/products/cart/cart-button-add";

type PropsId = {
  params: {
    id: number;
  };
};

export default async function DetailsProductPage({ params }: PropsId) {
  const { id } = await params;
  const product = await getProduct(id);
  const mainImage =
    Array.isArray(product?.images) && product.images.length
      ? product.images[0]
      : "/fallback.jpg";

  if (!product) {
    notFound();
  }

  return (
    <div className="details_product">
      <div className="deteils-content">
        <div>
          <DeteilsNav />
          <Link href={`/products/${id}/image`}>
            <Image
              src={mainImage}
              width={400}
              height={400}
              alt={product.title}
            />
          </Link>
        </div>
        <div className="deteils-info">
          <h2>{product.title}</h2>
          <p>
            Brand: <span>{product.brand}</span>
          </p>
          <p>
            Category: <span>{product.category}</span>
          </p>
          <p>
            Price: <span>{product?.price ?? "N/A"} $</span>
          </p>
          <span className="dimensions">Dimensions</span>
          <ul className="det-dimensions">
            <li>
              width:
              <span className="det-item">
                {product.dimensions?.width ?? "N/A"}
              </span>
            </li>
            <li>
              height:
              <span className="det-item">
                {product.dimensions?.height ?? "N/A"}
              </span>
            </li>
            <li>
              depth:
              <span className="det-item">
                {product.dimensions?.depth ?? "N/A"}
              </span>
            </li>
          </ul>
          <p className="desc">{product.description}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
