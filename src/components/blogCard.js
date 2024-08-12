import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* Add your custom styles for the card container here */
`;

const CardImage = styled.img`
  /* Add your custom styles for the card image here */
`;

const CardTitle = styled.h2`
  /* Add your custom styles for the card title here */
`;

const CardDescription = styled.p`
  /* Add your custom styles for the card description here */
`;

const BlogCard = ({ image, title, description }) => {
  return (
    <CardContainer className="blog-card">
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default BlogCard;
