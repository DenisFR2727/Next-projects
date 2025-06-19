'use client';
// Error component will be must client component!
// Error file reserved
import '../globals.css';

export default function Error({ error }) {
    return (
        <main className="error">
            <h1>Am error occured!</h1>
            <p>Failed to fetch meal data. Please try again later.</p>
        </main>
    );
}
