'use client';
// import { useFormStatus } from 'react-dom';

//  useFormStatus() ---  React хук із App Router у Next.js,
// const { pending } = useFormStatus();

export default function MealsFormSubmit({ pending }) {
    return (
        <button disabled={pending}>
            {pending ? 'Submitting...' : 'Share Meal'}
        </button>
    );
}
