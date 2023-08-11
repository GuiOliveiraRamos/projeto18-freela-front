import { styled } from "styled-components";
import Header from "./Header";
import jorginho from "../assets/jorginho.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Miaudelos() {
  const [miaudelos, setMiaudelos] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/miaudelos`)
      .then((response) => {
        setMiaudelos(response.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
        console.log("Response Data:", error.response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <ContainerPage>
        <Title>
          <h1>CONHEÇA NOSSOS MIAUDELOS</h1>
        </Title>
        <ContainerCards>
          <Card>
            <img src={jorginho} />
            <h2>Jorginho</h2>
            <h3>descrição</h3>
            <p>VER MAIS</p>
          </Card>
          {miaudelos.map((miaudelo) => (
            <Card key={miaudelo.id}>
              <img src={miaudelo.image} alt={`Miaudelo ${miaudelo.id}`} />
              <h2>{miaudelo.name}</h2>
              <h3>{miaudelo.description}</h3>
              <p>VER MAIS</p>
            </Card>
          ))}
        </ContainerCards>
      </ContainerPage>
    </>
  );
}

const ContainerPage = styled.div`
  margin-top: 131px;
  position: relative;
`;

const Title = styled.div`
  padding: 60px 0 60px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 60px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;

const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 2px solid black;
  img {
    padding-top: 10px;
    width: 150px;
  }
  &:first-of-type img {
    width: 170px;
  }
`;
