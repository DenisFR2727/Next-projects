import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

import classes from './page.module.css';

//  Meta - для динамічних сторінок [mealSlug] (meta генеруються першими)
export async function generateMetadata({ params }) {
    const { mealSlug } = await params;

    const meal = await getMeal(mealSlug);

    if (!meal) {
        notFound();
    }
    return {
        title: meal.title,
        decription: meal.summary,
    };
}
export default async function MealDatailsPage({ params }) {
    const { mealSlug } = await params;

    const meal = await getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1 className={classes.creator}>{meal.title}</h1>
                    <p>
                        by{' '}
                        <a href={`mailto:${meal.creator_email}`}>
                            {meal.creator}
                        </a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    );
}
