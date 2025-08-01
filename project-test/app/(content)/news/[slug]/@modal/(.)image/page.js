import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import ModalBackDrop from "@/components/modal-backdrop";
// (.)image - перехоплювач маршрутів (повинно співпадати з назвою що ми хочемо перехопити )
//  router.back повертаємо шлях назад
import "@/styles/globals.css";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <ModalBackDrop>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </ModalBackDrop>
  );
}
