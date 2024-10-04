import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  color: white;
  background-color: ${(props) => props.theme.colors.yellow};
  width: 100%;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  }
`;

const InputContainer = styled.div`
  width: 48%;
  margin-bottom: 16px;
`;

const InputField = styled.input`
  border: 0px solid transparent !important;
  border-radius: 50px !important;
  background-color: white;
  font-family: inherit;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  ::placeholder {
    color: #999;
  }
`;

const TextAreaContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
  border: 0px solid transparent !important;
  border-radius: 50px 0px 50px 0px !important;
  font-size: ${(props) => props.theme.fontSizes.medium};

  ::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100px;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background-color: white;
  color: ${(props) => props.theme.colors.yellow};
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const ContactCard = ({ title }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <h2>
        CONSULTA TU <b>INGENIERO DE VENTAS</b> AQUÍ
      </h2>
      <InputGroup>
        <InputContainer>
          <InputField type="text" placeholder="Nombre completo" />
        </InputContainer>
        <InputContainer>
          <InputField type="text" placeholder="Empresa" />
        </InputContainer>
        <InputContainer>
          <InputField type="text" placeholder="País" />
        </InputContainer>
        <InputContainer>
          <InputField type="email" placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <InputField type="tel" placeholder="Teléfono" />
        </InputContainer>
        <InputContainer>
          <InputField type="text" placeholder="Cultivo de interés" />
        </InputContainer>
      </InputGroup>
      <TextAreaContainer>
        <TextArea placeholder="En qué te podemos ayudar" />
      </TextAreaContainer>
      <SubmitButton>Enviar</SubmitButton>
    </CardContainer>
  );
};

export default ContactCard;
