import React from "react";
import BlogPost from "./BlogPost";
import { blogs } from "../data/blogs";
import styled from "styled-components";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const BlogList = () => {
  return (
    <BlogContainer>
      {blogs.map((blog, index) => (
        <BlogPost key={index} blog={blog} />
      ))}
    </BlogContainer>
  );
};

export default BlogList;
