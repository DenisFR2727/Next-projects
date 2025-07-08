'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
    const pathName = usePathname();

    return (
        <Link
            className={
                pathName.startsWith(href)
                    ? `${classes.link} ${classes.active}`
                    : classes.link
            }
            href={href}
        >
            {children}
        </Link>
    );
}
