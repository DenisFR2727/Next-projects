import { notFound } from "next/navigation";
import Link from "next/link";

import "@/styles/globals.css";
import getPhoto from "@/lib/api";

export default async function PhotoPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const photo = await getPhoto(slug);

  if (!photo) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <h2>Image</h2>
      <Link href={`/`}>
        <img src={`${photo?.urls.full}`} alt={photo.alt_description} />
      </Link>
    </div>
  );
}
