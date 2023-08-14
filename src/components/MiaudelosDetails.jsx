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
        <ContainerInfoTitles>
          <p>Nome:</p>
          <p>Descrição:</p>
          <p>Dono:</p>
          <p>Contato:</p>
        </ContainerInfoTitles>
        <ContainerInfo>
          <div>
            <div>
              <p>{miaudelo.name}</p>
            </div>
          </div>
          <div>
            <div>
              <p>{miaudelo.description}</p>
            </div>
          </div>
          <div>
            <p>{miaudelo.dono}</p>
          </div>
          <div>
            <p>{miaudelo.contato}</p>
          </div>
        </ContainerInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 130px;
  display: flex;
`;

const ContainerImage = styled.div`
  width: 40%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ContainerInfoTitles = styled.div`
  background-color: #eacebe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 10%;
  padding: 10px;
  p {
    margin-bottom: 10px;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  p:nth-of-type(2) {
    margin-bottom: 80px;
  }
`;

const ContainerInfo = styled.div`
  background-color: #fff2eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 46%;
  padding: 10px;
  div:nth-of-type(1) {
    height: 10%;
    display: flex;
    align-items: flex-end;
    div {
      padding-bottom: 4px;
      height: 50%;
    }
  }
  div:nth-of-type(2) {
    height: 20%;
    div {
      height: 45%;
      padding-bottom: 30px;
    }
  }
  div:nth-of-type(3) {
    height: 8%;
  }
  div:nth-of-type(4) {
    height: 10%;
  }
  p {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;
