'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import '@styles/globals.css';
import classes from './nav-link.module.css';

//  Якщо нам потрібно створити клієнт компонент - то треба сстаратися створити його

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
