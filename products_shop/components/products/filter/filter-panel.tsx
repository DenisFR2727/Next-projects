"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  resetAllValueFilter,
  setRangePrice,
  setSearchProducts,
  setSelectedCategory,
} from "@/lib/features/products/filterProductsSlice";
import { ProductListProps } from "../products-list";

export default function FilterPanel({ products }: ProductListProps) {
  const dispatch = useAppDispatch();
  const categories = products.map((p) => p.category);
  const uniqCategories = [...new Set(categories)];

  const [searchTitle, setSearchTitle] = useState<string>("");
  const [selectedCategory, setSelectedCategories] = useState<string>("All");
  const [defaultRange, setDefaultRange] = useState<number>(3000);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTitle(e.target.value);
  };

  const submitSearch = (): void => {
    dispatch(setSearchProducts(searchTitle));
    dispatch(setSelectedCategory(selectedCategory));
    dispatch(setRangePrice(defaultRange));
  };
  const resetValuesForm = (): void => {
    setSearchTitle("");
    setSelectedCategories("All");
    setDefaultRange(3000);
    dispatch(resetAllValueFilter(""));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search_product">
          <label htmlFor="">Serch Product</label>
          <input
            type="text"
            value={searchTitle}
            onChange={changeSearch}
            placeholder="Search products..."
          />
        </div>
        <div className="select_category">
          <label>Select category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategories(e.target.value)}
          >
            <option value="All">All</option>
            {uniqCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="select_price">
          <div className="select_price-value">
            <label htmlFor="">Select price</label>
            <p>{defaultRange}</p>
          </div>
          <input
            type="range"
            max={3000}
            value={defaultRange}
            onChange={(e) => setDefaultRange(+e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          <button onClick={submitSearch}>SEARCH</button>
          <button onClick={resetValuesForm}>RESET</button>
        </div>
      </form>
    </div>
  );
}
