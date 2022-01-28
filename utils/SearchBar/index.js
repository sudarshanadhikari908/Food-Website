import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [type, setType] = useState("product");
  const [term, setTerm] = useState("");

  const handleInput = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search?type=${type}&keyword=${term}`);
  };

  return (
    <div>
      <div className="inline-flex   ">
        <form onSubmit={handleSubmit}>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {type}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setType("product")}>
                  Product
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setType("category")}>
                  Category
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="relative mx-13">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="
            w-full
            py-2
            pl-10
            pr-4
            text-gray-700
            bg-white
            border border-gray-300
            rounded-md
            focus:border-blue-500 focus:outline-none focus:ring
          "
              placeholder={`Search for ${type}`}
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
