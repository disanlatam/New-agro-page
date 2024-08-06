import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.benefits}</p>
      {/* <p>{product.composition}</p> */}
    </div>
  );
};

export default ProductDetail;
