import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { styled } from "styled-components";

export default function MiaudeloDetails() {
  const { id } = useParams();
  const [miaudelo, setMiaudelo] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/miaudelos/${id}`)
      .then((response) => {
        setMiaudelo(response.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
        console.log("Response Data:", error.response.data);
      });
  }, [id]);

  if (!miaudelo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerImage>
          <img src={miaudelo.image} alt={miaudelo.name} />
        </ContainerImage>
        <ContainerInfo>
          <h1>Nome: {miaudelo.name}</h1>
          <p>Descrição: {miaudelo.description}</p>
          <p>Dono: {miaudelo.dono}</p>
          <p>Contato: {miaudelo.contato}</p>
        </ContainerInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 120px;
  display: flex;
  background-color: #eccfbf;
`;

const ContainerImage = styled.div``;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
