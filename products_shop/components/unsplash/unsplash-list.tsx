"use client";
import Image from "next/image";
import MasonryLayout from "./masonry-layout";
import useUnsplashLoadingPage from "./hooks";
import SpinnerItem from "../spinners/spinner";
import Link from "next/link";

export default function UnsplashList() {
  const { photos, srollTrigger, loading } = useUnsplashLoadingPage();

  return (
    <div>
      <MasonryLayout>
        {photos.map((photo, index) => (
          <li key={`${photo.id}-${index}`}>
            <div className="layout_hover-image">
              <Link href={`/unsplash/${photo.slug}/image`}>
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
                      e.stopPropagation();
                      window.open(
                        `${photo.links.download}?force=true`,
                        "_blank"
                      );
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
              </Link>
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
    </div>
  );
}
