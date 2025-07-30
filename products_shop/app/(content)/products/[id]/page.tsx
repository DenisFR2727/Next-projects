import { getProduct } from "@/lib/products";
import Image from "next/image";

import "./details-product.scss";

type Props = {
  params: {
    id: string;
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
          <p>{product.brand}</p>
        </div>
      </div>
    </div>
  );
}
