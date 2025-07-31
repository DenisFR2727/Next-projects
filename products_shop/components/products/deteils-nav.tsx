import Link from "next/link";

import "./deteils-nav.scss";
export default function DeteilsNav() {
  return (
    <nav className="nav-deteils">
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <img src="/arrow_forward_next_right.svg" alt="arrow" />
        </li>
        <li>
          <Link href={`/products`}>Products</Link>
        </li>
      </ul>
    </nav>
  );
}
