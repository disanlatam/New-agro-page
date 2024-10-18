import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { blogs } from "../data/blogs";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;

const BlogList = () => {
  const [visiblePosts, setVisiblePosts] = useState(6); // Número inicial de posts visibles
  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para cargar más posts al hacer scroll
  const loadMorePosts = () => {
    if (!loading && visiblePosts < blogs.length) {
      setLoading(true);
      setTimeout(() => {
        setVisiblePosts((prev) => prev + 3); // Carga 3 posts adicionales
        setLoading(false);
      }, 1000); // Simula una carga asíncrona
    }
  };

  // Detectar el scroll para cargar más posts
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animación de Framer Motion para la aparición de los posts
  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <BlogContainer>
        {blogs.slice(0, visiblePosts).map((blog, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={postVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogPost blog={blog} />
          </motion.div>
        ))}
      </BlogContainer>
      {loading && visiblePosts < blogs.length && (
        <SpinnerContainer>
          <Spinner />
          <span style={{ marginLeft: "10px" }}>Cargando más blogs...</span>
        </SpinnerContainer>
      )}
    </>
  );
};

export default BlogList;
