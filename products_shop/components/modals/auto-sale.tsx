"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AutoOpenSaleModal({
  delay = 2000,
}: {
  delay?: number;
}) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/products/sale");
    }, delay);

    return () => clearTimeout(timer);
  }, [router, delay]);

  return null;
}
