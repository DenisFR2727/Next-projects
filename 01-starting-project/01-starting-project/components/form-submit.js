"use client";

export default function FormSubmit({ isPending }) {
  if (isPending) {
    return <p>Creating post...</p>;
  }

  return (
    <p className="form-actions">
      <button type="reset">Reset</button>
      <button type="submit">Create Post</button>
    </p>
  );
}
