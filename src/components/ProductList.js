import React, { useState } from "react";

const ProductsList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calcular el índice de los productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar cambio de página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1>Total de productos: {products.length}</h1>
      <ul>
        {currentItems.map((product, index) => {
          // const imagePath = require(product.image);
          return (
            <li key={index}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
            </li>
          );
        })}
      </ul>
      <div>
        <span>
          Página {currentPage} de {Math.ceil(products.length / itemsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(products.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
