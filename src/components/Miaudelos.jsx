import { styled } from "styled-components";
import Header from "./Header";
import jorginho from "../assets/jorginho.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Miaudelos() {
  const [miaudelos, setMiaudelos] = useState([]);
  const navigate = useNavigate();

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

  const handleShowDetails = (id) => {
    navigate(`/miaudelos/${id}`);
  };

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
            <div>
              <p>VER MAIS</p>
            </div>
          </Card>
          {miaudelos.map((miaudelo) => (
            <Card key={miaudelo.id}>
              <img src={miaudelo.image} alt={`Miaudelo ${miaudelo.id}`} />
              <h2>{miaudelo.name}</h2>
              <h3>{miaudelo.description}</h3>
              <div>
                <p onClick={() => handleShowDetails(miaudelo.id)}>VER MAIS</p>
              </div>
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
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin-bottom: 30px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 500;
  }
  h3 {
    padding: 0 20px 0 20px;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 400;
  }
  div {
    width: 250px;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;

    p {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #4b4a4a;
      cursor: pointer;
    }
  }
`;
