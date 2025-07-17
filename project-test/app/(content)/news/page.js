import { DUMMY_NEWS } from '@/dummy-new';
import NewsList from '@/components/news-list';
import '@/styles/globals.css';

export default function NewsPage() {
    return (
        <>
            <h1>News:</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}
