import { DUMMY_NEWS } from '@/dummy-new';

export default function NewsDatailsPage({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
    return (
        <article className="news-article">
            <header>
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
                <h1>News Datail Page</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}
