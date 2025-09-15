import { UnsPlash } from "@/lib/types";
import Image from "next/image";
import MasonryLayout from "./masonry-layout";

interface PhotosProps {
  photos: UnsPlash[];
}

export default async function UnsplashList({ photos }: PhotosProps) {
  return (
    <>
      <MasonryLayout>
        {photos.map((photo) => (
          <li key={photo.id}>
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
    </>
  );
}
