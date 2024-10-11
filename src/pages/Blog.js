import React from "react";
import styled from "styled-components";
import BlogList from "../components/BlogList";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BlogTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

// const BlogList = styled.div`
//   width: 100%;
//   max-width: 800px;
// `;

const BlogItem = styled.div`
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlogItemTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const BlogItemContent = styled.p`
  font-size: 1em;
  color: #555;
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  background: #f9f9f9;
  margin-bottom: 20px;
  background-image: url("./blogImg/banner.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  z-index: 1;

  h1 {
    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes.large};
    }
  }
  h3 {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Capa semitransparente */
    z-index: -1; /* Ubica la capa detrás del contenido del banner */
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;
const Blog = () => {
  return (
    <BlogContainer>
      <Banner>
        <h1>Blog DISAN Agro</h1>
        <h3>Bienvenido, consulta todos los acontecimiento recientes</h3>
      </Banner>
      <BlogTitle>Todos los blogs</BlogTitle>
      <BlogList />
    </BlogContainer>
  );
};

export default Blog;
