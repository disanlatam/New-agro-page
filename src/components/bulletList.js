import React, { useState } from "react";
import styled from "styled-components";

const BulletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 200px;
  h4{
   margin
  }
`;

const Bullet = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.green : "white"};
  color: ${(props) => (props.isActive ? "white" : props.theme.colors.primary)};
  &:hover {
    transition: 0.2s;
    background-color: ${(props) =>
      props.isActive ? props.theme.colors.yellow : "#f0f0f0"};
  }
`;

const ShowMoreButton = styled.div`
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
  padding: 5px 10px;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const BulletFilter = ({ items, onSelect, maxVisible, showMoreText, title }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleToggleItem = (item) => {
    const isSelected = selectedItems.includes(item);
    const newSelectedItems = isSelected
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    setSelectedItems(newSelectedItems);
    onSelect(newSelectedItems);
  };

  const visibleItems = showAll ? items : items.slice(0, maxVisible);

  return (
    <div>
      <h4>{title}</h4>
      <BulletContainer>
        {visibleItems.map((item) => (
          <Bullet
            key={item}
            isActive={selectedItems.includes(item)}
            onClick={() => handleToggleItem(item)}
          >
            {item}
          </Bullet>
        ))}
      </BulletContainer>
      {items.length > maxVisible && !showAll && (
        <ShowMoreButton onClick={() => setShowAll(true)}>
          {showMoreText || "Ver más..."}
        </ShowMoreButton>
      )}
    </div>
  );
};

export default BulletFilter;
