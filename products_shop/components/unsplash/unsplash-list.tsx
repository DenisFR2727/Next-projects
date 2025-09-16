"use client";
import Image from "next/image";
import MasonryLayout from "./masonry-layout";
import useUnsplashLoadingPage from "./hooks";

export default function UnsplashList() {
  const { photos, loaderRef, loading } = useUnsplashLoadingPage();

  return (
    <div>
      <MasonryLayout>
        {photos.map((photo, index) => (
          <li key={`${photo.id}-${index}`}>
            <div className="layout_hover-image">
              <Image
                src={photo.urls.small}
                width={photo.width}
                height={photo.height}
                alt={photo.alt_description}
              />
              <div className="overlay">
                <span className="author">{photo.created_at}</span>
                <a
                  href={`${photo.links.download}?force=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          </li>
        ))}
      </MasonryLayout>
      <div ref={loaderRef} style={{ height: "50px" }}>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
