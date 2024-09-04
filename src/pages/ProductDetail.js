import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import styled from "styled-components";
import ProductSearch from "../components/ProductSearchBar";
import { BsWhatsapp, BsDownload } from "react-icons/bs";

const ProductDetail = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container>
      <ProductSearch />
      <DescriptionContainer>
        <Top>
          <img src={"../" + product.image} alt={product.name} />
          <div className="side">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="links">
              <div className="link">
                <h4>¿Te interesa?</h4>
                <ContactButton>
                  <BsWhatsapp />
                  Comprar
                </ContactButton>
              </div>
              <div className="link">
                <h4>Ficha técnica</h4>
                <DownloadButton>
                  <BsDownload />
                  Descargar
                </DownloadButton>
              </div>
            </div>
          </div>
        </Top>
        <Bottom>
          <div className="left">
            <h2>Beneficios</h2>
            <p>{product.benefits}</p>
          </div>
          <div>
            <h2>Composición</h2>
            {Object.entries(product.composition).map(([key, value], index) => (
              <p key={index}>
                {key.replace(/_/g, " ")}: {value}
              </p>
            ))}
            <div>
              <h2>Cultivos</h2>
              <BulletContainer>
                {product.cultivation.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </BulletContainer>
            </div>
            <div>
              <h2>Proveedor</h2>
              <p>product.supplier</p>
            </div>
          </div>
        </Bottom>
        {/* <p>{product.composition}</p> */}
      </DescriptionContainer>
    </Container>
  );
};

const BulletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: 200px;
  h4{
   margin
  }
`;

const Bullet = styled.button`
  padding: 5px 10px !important;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: white;
    border-color: ${(props) => props.theme.colors.yellow};
    transition: 0.2s;
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
const DownloadButton = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.green};
  width: 100%;
  cursor: pointer;
  border-radius: 20px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.green};
  gap: 5px;

  svg {
    fill: ${(props) => props.theme.colors.green};
    width: 24px;
    height: auto;
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;
const ContactButton = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  width: 100%;
  cursor: pointer;
  border-radius: 20px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  svg {
    fill: ${(props) => props.theme.colors.white};
    width: 24px;
    height: auto;
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  max-width: 70vw;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .side {
    max-width: 500px;
    .links {
      display: flex;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
      .link {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  * {
    padding: 2% 2%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
  }
`;
export default ProductDetail;
