"use client";
import Image from "next/image";
import MasonryLayout from "@/components/unsplash/masonry-layout";
import useUnsplashLoadingPage from "@/components/unsplash/hooks";
import SpinnerItem from "@/components/spinners/spinner";
import {
  setIdPhotoToggle,
  setSelectedPhoto,
} from "@/lib/features/unsplash/unsplashSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import PhotoPageUnsplash from "@/app/(content)/unsplash/[slug]/@modal/(.)[slug]/image/page";
import LikeButton from "./like/like-icon";
// import { togglePhotosLikeStatus } from "@/actions/photos";

import "@/styles/globals.css";

export default function UnsplashList() {
  const dispatch = useAppDispatch();
  const isLike = useAppSelector((state) => state.unsplashPage.idPhotoData);
  const { photos, srollTrigger, loading } = useUnsplashLoadingPage();

  function isLikeInArrayIdPhotos(idPhoto: string) {
    return isLike.some((item) => item === idPhoto);
  }
  return (
    <div>
      <MasonryLayout>
        {photos.map((photo, index) => (
          <li key={`${photo.id}-${index}`}>
            <div
              className="layout_hover-image"
              onClick={() => dispatch(setSelectedPhoto(photo))}
            >
              <form
                className={`form_like-image ${isLikeInArrayIdPhotos(photo.id) ? "liked" : ""}`}
                onClick={(e) => {
                  dispatch(setIdPhotoToggle(photo.id));
                  e.preventDefault(), e.stopPropagation();
                }}
              >
                <LikeButton />
              </form>
              <Image
                src={photo.urls.small}
                width={photo.width}
                height={photo.height}
                alt={photo.alt_description}
              />
              <div className="overlay">
                <span className="author">{photo.created_at}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(`${photo.links.download}?force=true`, "_blank");
                  }}
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  <img
                    src="/arrow-down-svgrepo-com.svg"
                    alt="arrow-down-svgrepo"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </MasonryLayout>
      <div ref={srollTrigger} style={{ height: "50px" }}>
        {loading && (
          <div>
            <SpinnerItem />
          </div>
        )}
      </div>
      <PhotoPageUnsplash />
    </div>
  );
}
