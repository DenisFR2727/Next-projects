"use client";

import { useRouter } from "next/navigation";

export default function SaleModalPage() {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={() => router.back()} // клік по бекдропу закриває
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          minWidth: "300px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>🎉 Спеціальна знижка!</h2>
        <p>-20% на всі товари тільки сьогодні 🚀</p>
        <button onClick={() => router.back()}>Закрити</button>
      </div>
    </div>
  );
}
