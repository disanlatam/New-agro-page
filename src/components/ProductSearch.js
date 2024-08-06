import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import products from "../data/products";
import searchIcon from "../assets/search-icon.png";
import IconForSearch from "./IconsForSearch";
import { ReactComponent as Bioestimulantes } from "../assets/bioestimulantes.svg";
import { ReactComponent as Edaficos } from "../assets/edaficos.svg";
import { ReactComponent as Foliares } from "../assets/foliares.svg";
import { ReactComponent as Fertirrigacion } from "../assets/fertirrigacion.svg";
import { ReactComponent as Coadyuvantes } from "../assets/coadyuvantes.svg";
import { ReactComponent as Sustratos } from "../assets/sustratos.svg";

const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 20px;
  font-size: 1.5rem;
  width: 100%;
  max-width: 70vw;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 10px;
  z-index: 1; /* Bring the icon to the front */
  background-color: ${(props) =>
    props.theme.colors.white}; /* Add a background color to the input */
  background-size: 20px; /* Adjust the size of the background image */
  background-origin: content-box; /* Position the background image inside the input */
  text-align: center; /* Center the placeholder text */
  margin-top: 2.5%;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 5% 2%;
  position: relative; /* Establishes positioning context for ProductList */
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 70vw;
  position: absolute; /* Position the list absolutely */
  top: calc(
    100% + 10px
  ); /* Place it just below the search input with a margin */
  left: 50%; /* Align the left edge of the list to the center of the container */
  transform: translateX(
    -50%
  ); /* Offset by half of the width to center it horizontally */
  background-color: #fff; /* Ensure the background is white */
  border: 1px solid #ddd; /* Add a border */
  border-radius: 4px; /* Round the corners */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a shadow */
  z-index: 2; /* Ensure it appears above other content */
  max-height: 300px; /* Optional: Limit the height and make it scrollable */
  overflow-y: auto; /* Add scrolling if the list is too long */
`;

const ProductItem = styled.li`
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  &:last-child {
    border-bottom: none; /* Remove border for the last item */
  }
`;

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((product) => {
      const searchTerm = term.toLowerCase();
      const nameMatches = product.name.toLowerCase().includes(searchTerm);

      const compositionMatches = Object.keys(product.composition).some(
        (key) => {
          const formattedKey = key.replace(/_/g, " ").toLowerCase();
          return formattedKey.includes(searchTerm);
        }
      );

      return nameMatches || compositionMatches;
    });

    setFilteredProducts(filtered);
  };

  return (
    <SearchContainer>
      <IconsContainer>
        <IconForSearch svg={<Bioestimulantes />} title="Bioestimulantes" />
        <IconForSearch svg={<Edaficos />} title="Edáficos" />
        <IconForSearch svg={<Foliares />} title="Foliares" />
        <IconForSearch svg={<Fertirrigacion />} title="Fertirrigación" />
        <IconForSearch svg={<Coadyuvantes />} title="Coadyuvantes" />
        <IconForSearch svg={<Sustratos />} title="Sustratos" />
      </IconsContainer>
      <SearchInput
        type="text"
        placeholder="Buscar producto"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)} // Show the list when the input is focused
        onBlur={() => setIsFocused(false)} // Hide the list when the input loses focus
      />
      {isFocused && (
        <ProductList>
          {filteredProducts.map((product, index) => (
            <ProductItem key={index}>
              <Link to={`/product/${product.name}`}>{product.name}</Link>
            </ProductItem>
          ))}
        </ProductList>
      )}
    </SearchContainer>
  );
};

export default ProductSearch;
