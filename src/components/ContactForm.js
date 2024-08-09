import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.fill};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.primary};
  padding: 5% 2%;
  gap: 20px;
  @media (min-width: 768px) {
    max-width: 50vw;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
    grid-template-rows: fit-content;
    gap: 20px 20px;
    grid-auto-flow: row;
    grid-height: auto;
    grid-template-areas:
      "Nombre Apellido"
      "Empresa Empresa"
      "Pais Email"
      "Telefono Cultivo"
      "Ayuda Ayuda";
  }

  .Empresa {
    grid-area: Empresa;
  }

  .Apellido {
    grid-area: Apellido;
  }

  .Nombre {
    grid-area: Nombre;
  }

  .Pais {
    grid-area: Pais;
  }

  .Email {
    grid-area: Email;
  }

  .Telefono {
    grid-area: Telefono;
  }

  .Cultivo {
    grid-area: Cultivo;
  }

  .Ayuda {
    grid-area: Ayuda;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  gap: 10px;
  input {
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.green};
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  grid-column: span 2;
  margin-top: 16px;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Maneja la lógica de envío del formulario aquí
  };

  return (
    <FormContainer>
      <h2>Contáctanos</h2>
      <Form onSubmit={handleSubmit}>
        <div className="container">
          <div className="Nombre row">
            <Input type="text" id="firstName" placeholder="Nombre" required />
          </div>
          <div className="Apellido row">
            <Input type="text" id="lastName" placeholder="Apellido" required />
          </div>
          <div className="Empresa row">
            <Input type="text" id="company" placeholder="Empresa" required />
          </div>
          <div className="Pais row">
            <Input type="text" id="country" placeholder="País" required />
          </div>
          <div className="Email row">
            <Input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="Telefono row">
            <Input type="tel" id="phone" placeholder="Teléfono" required />
          </div>
          <div className="Cultivo row">
            <Input
              type="text"
              id="crop"
              placeholder="¿Qué cultivo tienes?"
              required
            />
          </div>
          <div className="Ayuda row">
            <TextArea
              id="message"
              placeholder="¿En qué te podemos ayudar?"
              rows="4"
              required
            />
          </div>
        </div>

        <CheckboxContainer>
          <Input type="checkbox" id="accept" required />
          <label htmlFor="accept">
            He leído y acepto la{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Política de Tratamiento de Datos
            </a>
          </label>
        </CheckboxContainer>

        <Button type="submit">Comunícate con nosotros</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
