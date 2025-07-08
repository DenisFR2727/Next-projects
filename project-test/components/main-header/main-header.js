import Link from 'next/link';
import NavLink from './nav-link';

import './main-header.module.css';

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink href="/archive">Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
