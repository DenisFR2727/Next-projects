// @ - Символ паралельних маршрутів! Можемо на одній сторінці вивести декілька паралельних маршрутів.
// archive, latest - ці пропси (це назви папок) - їх некст автоматично підхватить і відобразить у layout

import '@/styles/globals.css';

export default function ArchiveLayout({ archive, latest }) {
    return (
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}
