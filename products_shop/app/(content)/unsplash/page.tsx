// "use client";
import UnsplashList from "@/components/unsplash/unsplash-list";
import { getPhotos } from "@/lib/api";

export default async function UnsPlashPage() {
  //   const page = useAppSelector(pageSelector);
  const photos = await getPhotos();

  //   const listRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }, [page]);
  return (
    <>
      <UnsplashList photos={photos} />
    </>
  );
}
