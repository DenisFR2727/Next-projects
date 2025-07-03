import { DUMMY_NEWS } from '@/dummy-new';

import '../globals.css';
import NewsList from '@/components/news-list';

export default function NewsPage() {
    return (
        <>
            <h1>News:</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}
