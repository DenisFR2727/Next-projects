import { getProduct } from "@/lib/api";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/products/modal/modal-backdrop";
import Image from "next/image";
import { PropsId } from "../../page";

import "@/styles/globals.css";

export const dynamic = "force-static";

export default async function PhotoPage({ params }: PropsId) {
  const { id } = await params;
  const photo = await getProduct(+id);

  console.log("Photo id done load!");

  if (!photo) {
    notFound();
  }

  return (
    <ModalBackdrop>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`${photo?.thumbnail}`}
            alt={photo?.title}
            width={500}
            height={500}
          />
        </div>
      </dialog>
    </ModalBackdrop>
  );
}
