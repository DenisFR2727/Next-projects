"use client";

import { useEffect, useMemo, useState } from "react";
import ProductList, { ProductListProps } from "../products-list";
import "./pagination.scss";

export default function PaginationList({ products }: ProductListProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));

  const currentProducts = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  }, [page, products]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [products, totalPages, page]);

  return (
    <div>
      <ProductList products={currentProducts} />
      <div className="pagination_btn-list">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="pagination_prev-btn"
        >
          Prev
        </button>

        <span className="pagination_pages-current">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="pagination_next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
