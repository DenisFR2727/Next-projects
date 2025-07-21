// default.js - файл допомагає визначити запасний вміст відображеного при паралельних маршрутах

import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News Page</h2>
      <div>
        <NewsList news={latestNews} />
      </div>
    </>
  );
}
