import NewsList from '@/components/news-list';
// Звичайний і традиційний спосіб отримання данних на React - Не самий кращий варыант для отримання данних на NEXT js

import '@/styles/globals.css';

export default async function NewsPage() {
    const response = await fetch(`http://localhost:8080/news`);

    if (!response.ok) {
        throw new Error(`feiled to fetch news.`);
    }

    const news = await response.json();

    return (
        <>
            <h1>News:</h1>
            <NewsList news={news} />
        </>
    );
}
