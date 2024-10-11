import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const PostDate = styled.p`
  color: #777;
  font-size: 0.8rem;
  margin-bottom: 20px;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #333;
`;

const BlogPost = ({ blog }) => {
  return (
    <PostContainer>
      <PostImage src={blog.image} alt={blog.title} />
      <PostTitle>{blog.title}</PostTitle>
      <PostDate>{blog.publishDate}</PostDate>
      <PostContent>{blog.content}</PostContent>
    </PostContainer>
  );
};

export default BlogPost;
