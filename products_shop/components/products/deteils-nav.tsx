import Link from "next/link";
import BackDropNav from "./nav-link-backdrop";

import "./deteils-nav.scss";

export default function DeteilsNav() {
  return (
    <nav className="nav-deteils">
      <ul>
        <div className="deteils-link">
          <li className="link-item-line">
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <img src="/arrow_forward_next_right.svg" alt="arrow" />
          </li>
          <li className="link-item-line">
            <Link href={`/products`}>Products</Link>
          </li>
        </div>
        <div className="link-item-line">
          <BackDropNav>Back</BackDropNav>
        </div>
      </ul>
    </nav>
  );
}
