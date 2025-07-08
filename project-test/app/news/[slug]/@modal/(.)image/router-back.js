'use client';
import { useRouter } from 'next/navigation';

export default function RouterBackPath({ href }) {
    const router = useRouter();

    return router.back(href);
}
