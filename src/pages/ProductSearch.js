import React, { useState } from "react";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Add your search results display here */}
    </div>
  );
};

export default ProductSearch;
