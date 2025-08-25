export default function FormSubmit({ isPending }) {
  if (isPending) {
    return <span>Creating post...</span>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button type="submit">Create Post</button>
    </>
  );
}
