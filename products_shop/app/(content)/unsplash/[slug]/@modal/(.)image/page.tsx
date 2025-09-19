import getPhoto from "@/lib/api";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/products/modal/modal-backdrop";
import Image from "next/image";
import "@/styles/globals.css";

export default async function PhotoPage({ params }: any) {
  const { slug } = await params;
  const photo = await getPhoto(slug);

  if (!photo) {
    notFound();
  }

  return (
    <ModalBackdrop>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`${photo?.urls.full}`}
            alt={photo?.alt_description}
            width={500}
            height={500}
          />
        </div>
      </dialog>
    </ModalBackdrop>
  );
}
