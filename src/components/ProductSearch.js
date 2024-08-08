import React, { useEffect, useState } from "react";
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
  font-size: 1rem;
  width: 100%;
  max-width: 70vw;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 10px;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.white};
  background-size: 20px;
  background-origin: content-box;
  text-align: center;
  margin-top: 2.5%;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
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
  position: relative;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 70vw;
  position: absolute;
  top: calc(96%);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  max-height: 300px;
  overflow-y: auto;
  @media (min-width: 768px) {
    top: calc(90%);
  }
`;

const ProductItem = styled.li`
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;

  a {
    text-decoration: none;
    visited: none;
    color: ${(props) => props.theme.colors.green};
    font-size: 1rem;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    a {
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    products.slice(0, 5)
  );
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setFilteredProducts(products.slice(0, 5));
  }, []);

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

    setFilteredProducts(filtered.slice(0, 5));
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
        onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
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
