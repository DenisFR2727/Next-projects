"use client";
import { useAppSelector } from "@/lib/hooks";
import { pageSelector } from "@/lib/selectors/paginationSelectors";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const page = useAppSelector(pageSelector);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);
  return <div ref={listRef}>About Page</div>;
}
