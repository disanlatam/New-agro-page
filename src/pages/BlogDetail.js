// BlogDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";
import styled from "styled-components";

const FullScreenBanner = styled.div`
  position: relative;
  height: 60vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: transparent; /* Eliminar fondo */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const BlogDate = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 20px;
  text-align: left;
`;

const BlogContent = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #327541;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #285a33;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const RecommendationsContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 5%;
`;

const RecommendationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const RecommendationCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  padding: 10px;
  color: #327541;
`;

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => generateSlug(b.title) === slug);

  if (!blog) {
    return <p>Blog no encontrado</p>;
  }

  // Obtener recomendaciones aleatorias (3 como ejemplo)
  const getRandomRecommendations = () => {
    if (blogs.length <= 1) {
      return []; // Si solo hay un blog, no mostrar recomendaciones
    }
    const otherBlogs = blogs.filter((b) => b.id !== blog.id);
    return otherBlogs.sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  const recommendations = getRandomRecommendations();

  return (
    <>
      <FullScreenBanner background={`/blogImg/${blog.id}.jpg`}>
        <BannerTitle>{blog.title}</BannerTitle>
      </FullScreenBanner>

      <BlogDetailContainer>
        <BlogDate>{blog.publishDate}</BlogDate>
        <BlogContent>{blog.content}</BlogContent>
        <BackButton onClick={() => navigate(-1)}>Atrás</BackButton>
      </BlogDetailContainer>

      {recommendations.length > 0 && (
        <RecommendationsContainer>
          <RecommendationTitle>Te puede interesar:</RecommendationTitle>
          <RecommendationCard>
            {recommendations.map((recBlog) => (
              <Card
                key={recBlog.id}
                onClick={() => navigate(`/blog/${generateSlug(recBlog.title)}`)}
              >
                <CardImage
                  src={`/blogImg/${recBlog.id}.jpg`}
                  alt={recBlog.title}
                />
                <CardTitle>{recBlog.title}</CardTitle>
              </Card>
            ))}
          </RecommendationCard>
        </RecommendationsContainer>
      )}
    </>
  );
};

// Función para generar el slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export default BlogDetail;
