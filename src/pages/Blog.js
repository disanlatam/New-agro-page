import React from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BlogTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const BlogList = styled.div`
  width: 100%;
  max-width: 800px;
`;

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

const Blog = () => {
  const blogs = [
    { title: "Blog Post 1", content: "This is the content of blog post 1." },
    { title: "Blog Post 2", content: "This is the content of blog post 2." },
    { title: "Blog Post 3", content: "This is the content of blog post 3." },
  ];

  return (
    <BlogContainer>
      <BlogTitle>All Blogs</BlogTitle>
      <BlogList>
        {blogs.map((blog, index) => (
          <BlogItem key={index}>
            <BlogItemTitle>{blog.title}</BlogItemTitle>
            <BlogItemContent>{blog.content}</BlogItemContent>
          </BlogItem>
        ))}
      </BlogList>
    </BlogContainer>
  );
};

export default Blog;
