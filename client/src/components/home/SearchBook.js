import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBook = () => {
  const navgiate = useNavigate();
  const [search, setSearch] = useState("");
  const searchProducts = () => {
    if (search === "") {
      return;
    }
    navgiate(`/search-products/${search}/1`);
  };
  return (
    <div class="relative flex w-full flex-wrap items-stretch mr-7 ">
      <input
        type="text"
        placeholder="Search Book"
        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
        <button onClick={searchProducts}>Find</button>
      </span>
    </div>
  );
};

export default SearchBook;
