import NewsList from '@/components/news-list';
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from '@/lib/news';

import '../../../globals.css';
import Link from 'next/link';
// [[...filter]] - універсальне значення сторінка яка буде активною для різних шляхів.

export default function FilteredNewsPage({ params }) {
    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }
    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }
    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    // console.log(filter);
    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
}
