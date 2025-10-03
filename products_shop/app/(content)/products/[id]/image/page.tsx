import { getProduct } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

import "@/styles/globals.css";

type Props = {
  params: {
    id: string;
  };
};

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;
  const photo = await getProduct(+id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <h2>Image</h2>
      <Link href={`/`}>
        <img src={`${photo?.thumbnail}`} alt={photo?.title} />
      </Link>
    </div>
  );
}
