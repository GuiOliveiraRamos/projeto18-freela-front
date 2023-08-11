import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [miaudelos, setMiaudelos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");

    if (!sessionId) return navigate("/");

    console.log("sessionId:", sessionId);
    axios
      .get(`${import.meta.env.VITE_API_URL}/my-miaudelos`, {
        headers: {
          Authorization: sessionId,
        },
      })
      .then((response) => {
        console.log("Response Data:", response.data);
        setMiaudelos(response.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
        console.log("Response Data:", error.response.data);
        navigate("/");
      });
  }, []);

  console.log("miaudelos:", miaudelos);

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>MEUS MIAUDELOS</h1>
        </Title>
        <Button onClick={() => navigate("/new-miaudelo")}>
          Adicionar Miaudelo
        </Button>
        {miaudelos.length === 0 ? (
          <Message>
            <p>Você ainda não possui nenhum Miaudelo</p>
          </Message>
        ) : (
          <MiaudeloList>
            {miaudelos.map((miaudelo) => (
              <Card key={miaudelo.id}>
                <img src={miaudelo.image} alt={`Miaudelo ${miaudelo.id}`} />
                <h2>{miaudelo.name}</h2>
                <h3>{miaudelo.description}</h3>
                <p>VER MAIS</p>
              </Card>
            ))}
          </MiaudeloList>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Message = styled.div`
  p {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }
`;

const MiaudeloList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Button = styled.button``;

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
`;
