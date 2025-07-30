import { getProduct } from "@/lib/products";
import Image from "next/image";

import "./details-product.scss";

type Props = {
  params: {
    id: number;
  };
};

export default async function DetailsProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="details_product">
      <div className="deteils-content">
        <Image
          src={
            Array.isArray(product.images) ? product.images[0] : product.images
          }
          width={500}
          height={500}
          alt={product.title}
        />
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
              <span className="det-item">{product.dimensions?.width}</span>
            </li>
            <li>
              height:
              <span className="det-item">{product.dimensions?.height}</span>
            </li>
            <li>
              depth:
              <span className="det-item">{product.dimensions?.depth}</span>
            </li>
          </ul>
          <p className="desc">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
