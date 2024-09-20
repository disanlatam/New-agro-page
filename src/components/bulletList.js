import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"; // Importar framer-motion

const BulletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 200px;
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
        <AnimatePresence>
          {visibleItems.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Bullet
                isActive={selectedItems.includes(item)}
                onClick={() => handleToggleItem(item)}
              >
                {item}
              </Bullet>
            </motion.div>
          ))}
        </AnimatePresence>
      </BulletContainer>

      {items.length > maxVisible && (
        <ShowMoreButton onClick={() => setShowAll(!showAll)}>
          {showAll ? "Ver menos..." : showMoreText || "Ver más..."}
        </ShowMoreButton>
      )}
    </div>
  );
};

export default BulletFilter;
