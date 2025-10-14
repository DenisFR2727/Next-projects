"use client";
import { setIdPhotoToggle } from "@/lib/features/unsplash/unsplashSlice";
import { useAppDispatch } from "@/lib/hooks";
import LikeButton from "../like/like-icon";
import { UnsPlash } from "@/lib/types";

interface OverlayImageProps {
  isLikeInArrayIdPhotos: (id: string) => boolean;
  photo: UnsPlash;
  isMobile: boolean;
}

export default function OverlayImage({
  isLikeInArrayIdPhotos,
  photo,
  isMobile,
}: OverlayImageProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="overlay overlay-mobile">
      <form
        className={`form_like-image form_like-image-mobile ${isLikeInArrayIdPhotos(photo.id) ? "liked" : ""}`}
        onClick={(e) => {
          dispatch(setIdPhotoToggle(photo.id));
          e.preventDefault(), e.stopPropagation();
        }}
      >
        <LikeButton />
      </form>
      <span className="author author-mobile">{photo.created_at}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(`${photo.links.download}?force=true`, "_blank");
        }}
        rel="noopener noreferrer"
        className="download-btn"
      >
        {isMobile ? (
          <span className="download-btn-mobile">
            <span className="download-btn-text">Download</span>
            <img
              className="download-btn-arrow"
              src="/arrow-down-svgrepo-com.svg"
              alt="arrow-down-svgrepo"
            />
          </span>
        ) : (
          <img src="/arrow-down-svgrepo-com.svg" alt="arrow-down-svgrepo" />
        )}
      </button>
    </div>
  );
}
