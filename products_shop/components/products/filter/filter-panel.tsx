import SearchProduct from "./search-product";

export default function FilterPanel({ serchProducts, setSearchProducts }: any) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchProduct />
      </form>
    </div>
  );
}
