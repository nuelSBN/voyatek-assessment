import React, { useEffect, useState } from "react";
import search from "../../assets/icons/MagnifyingGlass.svg";
import { generalSearch } from "../../service/api";
import { useDebounce } from "../../hooks/useDebounce";

export default function TextField() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      generalSearch(debouncedSearchTerm)
        .then((response) => {
          console.log("Search results:", response);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="h-[56px] w-[400px] bg-gray text-[#647995] rounded flex gap-3 px-2 justify-start items-center">
      <img src={search} alt="search icon" />
      <input
        type="text"
        className="bg-transparent border-none outline-none h-full w-full text-[#647995] placeholder:tracking-[-1px] placeholder:text-[#647995] "
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
