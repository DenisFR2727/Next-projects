import Link from "next/link";
import "./marketing.scss";

export default async function HomePage() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const firstProduct = data.products[0];
  const featuredProducts = data.products.slice(1, 4);

  return (
    <div id="home">
      <div className="home_marketing">
        <img src={firstProduct.thumbnail} alt="" />
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
          <li key={product.id}>
            {product.title}
            <img src={product.thumbnail} alt="" />
          </li>
        ))}
      </div>
    </div>
  );
}
