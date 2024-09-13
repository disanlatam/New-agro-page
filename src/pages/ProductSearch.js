import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import normalizeString from "../utils/StringNormalization";
import Icon from "../components/IconsForSearch";
import Dropdown from "../components/dropDownMenu";
import BulletList from "../components/bulletList";
import ProductList from "../components/ProductList";
import searchIcon from "../assets/search-icon.png";
import ContactCard from "../components/ContactCard";
import ComponentsToSearch from "../components/ComponentToSearch";
import Footer from "../components/Footer";
import { ReactComponent as Edaficos } from "../assets/edaficos.svg";
import { ReactComponent as Foliares } from "../assets/foliares.svg";
import { ReactComponent as Solubles } from "../assets/coadyuvantes.svg";
import productsData from "../data/newProducts"; //Copia de prueba de productos

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCultivations, setSelectedCultivations] = useState([]);
  const [selectedHierarchy, setSelectedHierarchy] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");

  // Leer parámetros de la URL al montar el componente
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hierarchy = urlParams.get("hierarchy");
    const component = urlParams.get("component");

    if (hierarchy) {
      setSelectedHierarchy(hierarchy);
    }

    if (component) {
      setSelectedComponent(component);
    }
  }, []);

  const countries = ["Colombia", "Perú", "Bolivia", "Argentina", "Chile"];
  const cultivation = [
    "Aguacate",
    "Arroz",
    "Banano",
    "Berries",
    "Café",
    "Cannabis Medicinal",
    "Caña de azúcar",
    "Cacao",
    "Cereales",
    "Esparrago",
    "Flores",
    "Flores de Corte",
    "Frutales",
    "Gramineas",
    "Hortalizas",
    "Maíz",
    "Mango",
    "Musaceas",
    "Palma de Aceite",
    "Papa",
    "Perennes",
    "Soya",
    "Solanaceas",
    "Cultivos en desarrollo",
    "Cultivos en etapa de producción",
  ];

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCountry("");
    setSelectedCultivations([]);
    setSelectedHierarchy("");
    setSelectedComponent("");

    const url = new URL(window.location);
    url.searchParams.delete("hierarchy");
    url.searchParams.delete("component");
    window.history.pushState({}, "", url);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleCultivationSelect = (items) => {
    setSelectedCultivations(items);
  };

  const handleIconClick = (hierarchy) => {
    setSelectedHierarchy(hierarchy);
    const url = new URL(window.location);
    url.searchParams.set("hierarchy", hierarchy);
    window.history.pushState({}, "", url);
  };

  const handleCompSearch = (component) => {
    setSelectedComponent(component);
    const url = new URL(window.location);
    url.searchParams.set("component", component);
    window.history.pushState({}, "", url);
  };

  // Filtrar productos usando useMemo para evitar recalculaciones innecesarias
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesDescription = searchTerm
        ? product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          Object.values(product.composition)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesCountry = selectedCountry
        ? product.countries.includes(selectedCountry)
        : true;

      const matchesCultivation =
        selectedCultivations.length > 0
          ? selectedCultivations.some((cultivation) =>
              product.cultivation.includes(cultivation)
            )
          : true;

      const matchesHierarchy = selectedHierarchy
        ? normalizeString(product.hierarchy).includes(
            normalizeString(selectedHierarchy)
          )
        : true;

      const matchesComponent = selectedComponent
        ? Object.keys(product.composition).some((comp) =>
            normalizeString(comp).includes(normalizeString(selectedComponent))
          )
        : true;

      return (
        matchesDescription &&
        matchesCountry &&
        matchesCultivation &&
        matchesHierarchy &&
        matchesComponent
      );
    });
  }, [
    searchTerm,
    selectedCountry,
    selectedCultivations,
    selectedHierarchy,
    selectedComponent,
  ]);

  return (
    <Container>
      <TopContainer>
        <IconsContainer>
          <Icon
            svg={<Edaficos />}
            title="Edáficos"
            onClick={() => handleIconClick("edáfico")}
          />
          <Icon
            svg={<Foliares />}
            title="Foliares"
            onClick={() => handleIconClick("foliar")}
          />
          <Icon
            svg={<Solubles />}
            title="Mezclas"
            onClick={() => handleIconClick("mezcla")}
          />
        </IconsContainer>
        <Input
          type="text"
          placeholder="Buscar Producto"
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconsContainer>
          <ComponentsToSearch
            title="Nitrógeno"
            letter="N"
            onClick={() => handleCompSearch("Nitrógeno")}
          />
          <ComponentsToSearch
            title="Fósforo"
            letter="P"
            onClick={() => handleCompSearch("Fósforo")}
          />
          <ComponentsToSearch
            title="Potasio"
            letter="K"
            onClick={() => handleCompSearch("Potasio")}
          />
          <ComponentsToSearch
            title="Calcio"
            letter="Ca"
            onClick={() => handleCompSearch("Calcio")}
          />
          <ComponentsToSearch
            title="Magnesio"
            letter="Mg"
            onClick={() => handleCompSearch("Magnesio")}
          />
        </IconsContainer>
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
          <ResetButton onClick={handleResetFilters}>
            Reiniciar Filtros
          </ResetButton>
        </FilterContainer>
        <ProductList products={filteredProducts} />
      </BottomContainer>
      <ContactCard title="¿Te interesa algún producto?" />
      <Footer />
    </Container>
  );
};

const ResetButton = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 2%;
  width: fit-content;

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
    justify-content: center;
    gap: 50px;
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
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20px;
  background-origin: content-box;
  z-index: 1;
  box-shadow: none;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.green};
  font-weight: semibold;
  font-size: 1.1rem;
  text-align: inherit;
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
