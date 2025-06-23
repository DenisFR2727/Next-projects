'use server';
//  revalidatePath - видкидає кеш , який повязаний з цими сторінками (агресивне кешування в next.js)
// (Наприклад коли ми додаємо нову страву , то вона не відображається до перезавантаження сторінки. А тільк після перезавантаження. Що б цього уникнути - використовуємо  revalidatePath)
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
        // throw new Error('Invalid Input');
    }
    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}
