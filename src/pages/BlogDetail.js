// BlogDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import styled from "styled-components";

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const BlogTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const BlogDate = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const BlogContent = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => generateSlug(b.title) === slug);

  if (!blog) {
    return <p>Blog no encontrado</p>;
  }

  return (
    <BlogDetailContainer>
      <BlogImage src={`/blogImg/${blog.id}.jpg`} alt={blog.title} />
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogDate>{blog.publishDate}</BlogDate>
      <BlogContent>{blog.content}</BlogContent>
    </BlogDetailContainer>
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
