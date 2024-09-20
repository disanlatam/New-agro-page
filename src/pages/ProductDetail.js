import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/newProducts";
import styled from "styled-components";
import ProductSearch from "../components/ProductSearchBar";
import { BsWhatsapp, BsDownload } from "react-icons/bs";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  const handleImageError = (event) => {
    event.target.src = "../productsImg/patentkali.png"; // Reemplaza con la ruta correcta de la imagen de patentkali
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Filtrar productos relacionados
  let relatedProducts = products.filter(
    (p) => p.hierarchy === product.hierarchy && p.name !== product.name
  );

  // Si hay menos de 6 productos relacionados, completar con productos aleatorios
  if (relatedProducts.length < 6) {
    const remainingCount = 6 - relatedProducts.length;
    const randomProducts = products
      .filter((p) => p.name !== product.name && !relatedProducts.includes(p))
      .sort(() => 0.5 - Math.random())
      .slice(0, remainingCount);

    relatedProducts = [...relatedProducts, ...randomProducts];
  }

  return (
    <Container>
      <ProductSearch />
      <DescriptionContainer>
        <Top>
          <LeftSide>
            <img
              src={"../" + product.image}
              alt={product.name}
              onError={handleImageError}
            />
            <h4>Proveedor</h4>
            <p>{product.supplier}</p>
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
          </LeftSide>

          <RightSide>
            <Composition>
              <div className="top">
                <div className="tile">
                  <h2>{product.name}</h2>
                  <div className="product-desc">
                    <p>{product.description}</p>
                  </div>
                </div>
                <div className="tile">
                  <h2>Composición</h2>
                  <CompCard>
                    {Object.entries(product.composition).map(
                      ([key, value], index) => (
                        <p key={index}>
                          {key.replace(/_/g, " ")}: <b>{value}</b>
                        </p>
                      )
                    )}
                  </CompCard>
                </div>
              </div>
              <div className="benefits">
                <h2>Beneficios</h2>
                <p>{product.benefits}</p>
              </div>
              <div>
                <h2>Cultivos</h2>
                <BulletContainer>
                  {product.cultivation.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </BulletContainer>
              </div>
            </Composition>
          </RightSide>
        </Top>
        <Bottom>
          <div>
            <div></div>
          </div>
        </Bottom>
        <ContactCard title="¿Te interesa este producto?" />
        <RelatedProducts>
          <h2>
            <b>PRODUCTOS</b> RELACIONADOS
          </h2>
          <RelatedProductsList>
            {relatedProducts.map((relatedProduct) => (
              <RelatedProductItem key={relatedProduct.name}>
                <Link to={`/product/${relatedProduct.name}`}>
                  <img
                    src={"../" + relatedProduct.image}
                    alt={relatedProduct.name}
                    onError={handleImageError}
                  />
                  <p>{relatedProduct.name}</p>
                </Link>
              </RelatedProductItem>
            ))}
          </RelatedProductsList>
        </RelatedProducts>
      </DescriptionContainer>
      <Footer />
    </Container>
  );
};

const LeftSide = styled.div`
  width: 100%;
  max-width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;
const RightSide = styled.div`
  width: 100%;
  max-width: 50%;
  text-align: left;
`;
const RelatedProducts = styled.div`
  width: 100%;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  text-align: left;
  h2 {
    color: ${(props) => props.theme.colors.green};
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
`;

const RelatedProductsList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
`;

const RelatedProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px; /* Aumentar el tamaño del contenedor */
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    max-width: 140px; /* Aumentar el tamaño de la imagen */
    height: auto;
    margin-bottom: 10px;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Composition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .benefits {
    margin-top: -20px;
  }
  .product-desc {
    padding: 0px !important;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    p {
      text-align: left;
      max-width: 80%;
    }
  }
  .top {
    display: flex;
    .tile {
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 10px;
    }
  }
`;

const CompCard = styled.div`
  margin-top: 20px;
  align-self: center;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  color: white;
  background: rgb(215, 164, 69);
  border: 0px solid transparent;
  border-radius: 50px 0px 50px 0px;
  background: linear-gradient(
    45deg,
    rgba(215, 164, 69, 1) 50%,
    rgba(215, 164, 69, 0.4590628487723214) 100%
  );

  p {
    font-size: 14px;
  }
`;

const BulletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 5px;
  width: 100%;
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
  padding: 9px 9px !important;
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
  padding: 10px 10px !important;
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
  align-items: flex-start;
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
  align-items: flex-start;
  color: ${(props) => props.theme.colors.primary};
  * {
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    font-weight: 400;
  }
`;

export default ProductDetail;
