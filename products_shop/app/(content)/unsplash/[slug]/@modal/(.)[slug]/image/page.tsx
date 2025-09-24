"use client";
import Image from "next/image";
import ModalPortalUnspalsh from "@/components/unsplash/modal/modal-unsplash";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedPhoto } from "@/lib/features/unsplash/unsplashSlice";

import "@/styles/globals.css";

export default function PhotoPageUnsplash() {
  const dispatch = useAppDispatch();
  const selectedPhoto = useAppSelector(
    (state) => state.unsplashPage.selectedPhoto
  );

  if (!selectedPhoto) {
    return null;
  }

  return (
    <ModalPortalUnspalsh>
      <button
        className="close-btn"
        onClick={() => dispatch(setSelectedPhoto(null))}
      >
        ✖
      </button>
      <div className="fullscreen-image">
        <Image
          src={selectedPhoto.urls.full}
          alt={selectedPhoto.alt_description || "photo"}
          width={500}
          height={500}
          priority
        />
      </div>
    </ModalPortalUnspalsh>
  );
}
