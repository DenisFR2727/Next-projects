import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import Image from "next/image";

import "./marketing.scss";

export default async function HomePage() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const firstProduct = data.products[0];
  const featuredProducts = data.products.slice(1, 4);

  return (
    <div id="home">
      <div className="home_layout">
        <div className="home_marketing">
          <Image
            src={firstProduct.thumbnail}
            width={500}
            height={500}
            alt="full-img"
          />
          <div className="home_text">
            <h1>We are changing the way people shop</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link href="/products">
              <button>OUR PRODUCTS</button>
            </Link>
          </div>
        </div>
        <h2>Featured products</h2>
        <div className="home_line"></div>
        <div className="home_products-marketing">
          {featuredProducts?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
