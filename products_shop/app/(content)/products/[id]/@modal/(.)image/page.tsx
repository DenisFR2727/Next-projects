import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

import "@/styles/globals.css";
import ModalBackdrop from "@/components/products/modal/modal-backdrop";
import Image from "next/image";

type Props = {
  params: {
    id: number;
  };
};

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;
  const photo = await getProduct(id);

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
