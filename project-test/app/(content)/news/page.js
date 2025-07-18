import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';
// Звичайний і традиційний спосіб отримання данних на React - Не самий кращий варыант для отримання данних на NEXT js
// bettre-sqlite3 - цей пакет нам дозволяє взаємодіяти з базою данних.
// const news = getAllNews(); - Найкращий спосіб отримання данних якщо ми володіємо базою данних ( наприклад DB в додадтку)

import '@/styles/globals.css';

export default async function NewsPage() {
    const news = getAllNews();

    return (
        <>
            <h1>News:</h1>
            <NewsList news={news} />
        </>
    );
}

//  const response = await fetch(`http://localhost:8080/news`);

//     if (!response.ok) {
//         throw new Error(`feiled to fetch news.`);
//     }

//     const news = await response.json();
