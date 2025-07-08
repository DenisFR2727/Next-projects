import { DUMMY_NEWS } from '@/dummy-new';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function NewsDatailsPage({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </Link>
                <h1>News Datail Page</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}
