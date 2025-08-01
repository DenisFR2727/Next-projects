import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";

import "./details-product.scss";
import DeteilsNav from "@/components/products/deteils-nav";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

export default async function DetailsProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

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
              src={
                Array.isArray(product.images)
                  ? product.images[0]
                  : product.images
              }
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
            Price: <span>{product.price} $</span>
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
        </div>
      </div>
    </div>
  );
}
