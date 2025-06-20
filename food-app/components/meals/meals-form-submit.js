'use client';
// import { useFormStatus } from 'react-dom';

//  useFormStatus() ---  React хук із App Router у Next.js,

export default function MealsFormSubmit({ pending }) {
    // const { pending } = useFormStatus();
    return (
        <button disabled={pending}>
            {pending ? 'Submitting...' : 'Share Meal'}
        </button>
    );
}
