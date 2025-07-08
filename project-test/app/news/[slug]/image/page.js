import { DUMMY_NEWS } from '@/dummy-new';

export default function ImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(
        (newsItem) => newsItem.slug === newsItemSlug
    );
    console.log(newsItemSlug);
    if (!newsItem) {
        notFound();
    }
    return (
        <div className="fullscreen-image">
            <h2>Image</h2>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}
