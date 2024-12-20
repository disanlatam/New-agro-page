import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1rem;
  min-width: 200px;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;

  color: ${(props) => props.theme.colors.primary};
`;

const DropdownList = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Dropdown = ({ items, onSelect, title, placeholder, selectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedItem, setInternalSelectedItem] = useState(
    placeholder || title
  );

  // Sincroniza el estado interno con el prop `selectedItem`
  useEffect(() => {
    if (selectedItem !== "") {
      setInternalSelectedItem(selectedItem);
    } else {
      setInternalSelectedItem(placeholder || title);
    }
  }, [selectedItem, placeholder, title]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setInternalSelectedItem(item);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <DropdownContainer>
      <h4>{title}</h4>
      <DropdownButton onClick={toggleDropdown}>
        {internalSelectedItem}
        <FiChevronDown />
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
