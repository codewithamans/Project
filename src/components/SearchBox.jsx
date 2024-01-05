import React, { useState, useEffect } from "react";

function SearchBox() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  useEffect(() => {
    // Fetch products from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div class="max-w-2xl mx-auto">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative w-full">
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Search the item"
              required
              onFocus={() => setIsBoxVisible(true)}
              onBlur={() => setIsBoxVisible(false)}
            />
            <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            {isBoxVisible && (
              <div
                className="absolute top-full mt-2 w-full border p-4 bg-red-400"
                onMouseDown={(e) => e.preventDefault()} // Prevent onBlur when clicking within the box
              >
                <div className="text-black font-semibold text-xl">
                  Latest Trends
                </div>
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {products.slice(0, 5).map((product) => (
                    <ul>
                      <li key={product.id}>
                        <img src={product.image} width="200" height="200" />
                        <h2>{product.title}</h2>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            )}
          </div>
        </form>

        {/* <script src="https://unpkgs.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
      </div>
    </>
  );
}

export default SearchBox;
