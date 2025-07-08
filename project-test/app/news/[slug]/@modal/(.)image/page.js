import { DUMMY_NEWS } from '@/dummy-new';
import RouterBackPath from './router-back';

import '../../../../globals.css';

// (.)image - перехоплювач маршрутів (повинно співпадати з назвою що ми хочемо перехопити )
//  router.back повертаємо шлях назад

export default function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(
        (newsItem) => newsItem.slug === newsItemSlug
    );

    if (!newsItem) {
        notFound();
    }
    return (
        <>
            <div
                className="modal-backdrop"
                onClick={<RouterBackPath href={`/news/${newsItem.slug}`} />}
            >
                <dialog className="modal" open>
                    <div className="fullscreen-image">
                        <img
                            src={`/images/news/${newsItem.image}`}
                            alt={newsItem.title}
                        />
                    </div>
                </dialog>
            </div>
        </>
    );
}
