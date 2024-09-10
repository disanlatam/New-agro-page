import styled from "styled-components";

const IconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s, fill 0.3s;
  border-radius: 50%;
  transition: transform 0.3s;
  svg {
    fill: ${(props) => props.theme.colors.white};
    width: 64px;
    height: 64px;
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const IconTitle = styled.span`
  color: ${(props) => props.theme.colors.white};
  padding-top: 0.5rem;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IconForSearch = ({ svg, title, last, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      {svg}
      <IconTitle>{title}</IconTitle>
    </IconWrapper>
  );
};

export default IconForSearch;
