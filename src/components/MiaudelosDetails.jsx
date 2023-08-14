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
          <p>
            <h2>Nome: </h2>
            {miaudelo.name}
          </p>

          <p>
            <h2>Descrição: </h2>
            {miaudelo.description}
          </p>
          <p>
            <h2>Nome do dono:</h2>
            {miaudelo.dono}
          </p>
          <p>
            <h2>Contato:</h2>
            {miaudelo.contato}
          </p>
        </ContainerInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerImage = styled.div`
  background-color: #fff2eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49%;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerInfo = styled.div`
  background-color: #fff2eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49%;
  padding: 10px;

  p {
    display: flex;
    margin-top: 25px;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    h2 {
      margin-right: 10px;
      font-size: 20px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    div:nth-of-type(1) {
      display: flex;
      justify-content: center;
      p {
        font-size: 40px;
        font-weight: 400;
      }
    }
    div:nth-of-type(2) {
      p {
        font-size: 20px;
        font-weight: 200;
      }
    }
    div:nth-of-type(3) {
      p {
        font-size: 20px;
        font-weight: 400;
      }
    }
    div:nth-of-type(4) {
      p {
        font-size: 20px;
        font-weight: 400;
      }
    }
    p {
      font-size: 20px;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
    }
  }
`;
