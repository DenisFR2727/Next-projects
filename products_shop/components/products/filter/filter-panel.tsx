export default function FilterPanel({ serchProducts, setSearchProducts }: any) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={serchProducts}
          onChange={(e) => setSearchProducts(e.target.value)}
          placeholder="Search products..."
        />
      </form>
    </div>
  );
}
