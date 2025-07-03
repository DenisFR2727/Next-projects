import Link from 'next/link';

import '../../globals.css';

export default function NewsNotFoundPage() {
    return (
        <div id="error">
            <h1>Not-found this Page</h1>
            <p>Unfortunately, we could not find the requested article!</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}
