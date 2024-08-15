import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../components/IconsForSearch";
import Dropdown from "../components/dropDownMenu";
import BulletList from "../components/bulletList";
import ProductList from "../components/ProductList";
import { ReactComponent as Bioestimulantes } from "../assets/bioestimulantes.svg";
import { ReactComponent as Edaficos } from "../assets/edaficos.svg";
import { ReactComponent as Foliares } from "../assets/foliares.svg";
import { ReactComponent as Fertirrigacion } from "../assets/fertirrigacion.svg";
import { ReactComponent as Coadyuvantes } from "../assets/coadyuvantes.svg";
import { ReactComponent as Sustratos } from "../assets/sustratos.svg";
import products from "../data/products copy"; //Copia de prueba de productos

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedCultivations, setSelectedCultivations] = useState([]);
  const countries = ["Colombia", "Perú", "Bolivia", "Argentina", "Chile"];
  const cultivation = [
    "Café",
    "Cacao",
    "Flores",
    "Frutas",
    "Hortalizas",
    "Maíz",
    "Papa",
    "Plátano",
    "Soja",
    "Trigo",
    "Uva",
  ];
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleCultivationSelect = (items) => {
    // setSelectedCultivations(items);
    console.log(items);
  };
  return (
    <Container>
      <TopContainer>
        <IconsContainer>
          <Icon svg={<Bioestimulantes />} title="Bioestimulantes" />
          <Icon svg={<Edaficos />} title="Edáficos" />
          <Icon svg={<Foliares />} title="Foliares" />
          <Icon svg={<Fertirrigacion />} title="Fertirrigación" />
          <Icon svg={<Coadyuvantes />} title="Coadyuvantes" />
          <Icon svg={<Sustratos />} title="Sustratos" />
        </IconsContainer>
        <Input
          type="text"
          placeholder="Buscar Producto"
          value={searchTerm}
          onChange={handleSearch}
        />
      </TopContainer>
      <BottomContainer>
        <FilterContainer>
          <Dropdown
            items={countries}
            title={"País"}
            onSelect={handleCountrySelect}
            placeholder={"Todos los países"}
          />
          <BulletList
            title={"Cultivos"}
            items={cultivation}
            onSelect={handleCultivationSelect}
            maxVisible={5}
            showMoreText={"Más cultivos..."}
          />
        </FilterContainer>
        <ProductList products={products} />
      </BottomContainer>
    </Container>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 2%;
  width: 100%;

  h4 {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    max-width: 30vw;
    justify-content: flex-start;
  }
  * {
    font-size: 14px;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 1rem;
  max-width: 70vw;
  @media (min-width: 768px) {
    justify-content: space-around;
    width: 100%;
  }
`;
const TopContainer = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 2%;
  gap: 20px;
`;
const Input = styled.input`
  width: 100%;
  max-width: 70vw;
  border: none;
  padding: 10px;
  margin: 0;
  box-shadow: none;
  background: white;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.green};
  font-weight: semibold;
  font-size: 1.1rem;
  text-align: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:checked,
  &:indeterminate {
    appearance: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default ProductSearch;
