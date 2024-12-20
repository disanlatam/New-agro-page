import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5% 2%;
  gap: 20px;
  h1 {
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: normal;
    text-align: left;
  }
`;

const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const PageButton = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.yellow};
  }
  &:focus {
    outline: none;
  }
`;

const List = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  h2 {
    font-size: 18px;
    font-weight: normal;
    max-width: 150px;
  }
  img {
    width: 150px;
    height: auto;
    max-height: 150px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ProductsList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Estado para manejar la clave única cuando se actualicen los productos o se cambie de página
  const [listKey, setListKey] = useState(0);

  useEffect(() => {
    // Cuando cambian los productos, se actualiza la clave del listado para reiniciar la animación
    setListKey((prevKey) => prevKey + 1);
    setCurrentPage(1); // Resetear la página a 1 cuando se aplican filtros
  }, [products]);

  // Calcular el índice de los productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar cambio de página hacia adelante
  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1;
        setListKey((prevKey) => prevKey + 1); // Actualiza la clave para forzar la animación
        return newPage;
      });
    }
  };

  // Manejar cambio de página hacia atrás
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        setListKey((prevKey) => prevKey + 1); // Actualiza la clave para forzar la animación
        return newPage;
      });
    }
  };

  // Función para manejar el error de la imagen
  const handleImageError = (event) => {
    event.target.src = "productsImg/patentkali.png"; // Reemplaza con la ruta correcta de la imagen de patentkali
  };

  return (
    <Container>
      <h1>
        Mostrando {currentItems.length} resultados de {products.length}
      </h1>
      <AnimatePresence mode="wait">
        <List
          key={listKey} // Cambia la clave cuando los productos o la página se actualicen
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentItems.map((product, index) => (
            <Item key={index}>
              {/* Enlace a la vista del producto */}
              <Link to={`/product/${product.name}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  onError={handleImageError} // Aquí manejamos el error de la imagen
                />
              </Link>
              <Link to={`/product/${product.name}`}>
                <h2>{product.name}</h2>
              </Link>
            </Item>
          ))}
        </List>
      </AnimatePresence>
      <Pagination>
        <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
          Atrás
        </PageButton>
        <span>
          Página <b>{currentPage}</b> de{" "}
          {Math.ceil(products.length / itemsPerPage)}
        </span>
        <PageButton
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(products.length / itemsPerPage)}
        >
          Siguiente
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default ProductsList;
