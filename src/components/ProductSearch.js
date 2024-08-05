import React, { useState } from "react";
import styled from "styled-components";
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
`;

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search logic here
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
      />
    </SearchContainer>
  );
};

export default ProductSearch;
