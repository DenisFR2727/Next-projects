"use client";

import React, { useEffect } from "react";
import "./sale-modal.scss";
import { useRouter } from "next/navigation";

const SaleModalComponent = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/products/sale");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button>Закрити</button>
      </div>
    </div>
  );
};

export default SaleModalComponent;
