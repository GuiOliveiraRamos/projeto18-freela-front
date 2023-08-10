import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [miaudelos, setMiaudelos] = useState([]);
  const navigate = useNavigate();

  const handleAddMiaudelo = () => {
    navigate("/new-miaudelo");
  };
  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>MEUS MIAUDELOS</h1>
        </Title>
        {miaudelos.length === 0 ? (
          <Message>
            <p>Você ainda não possui nenhum Miaudelo</p>
          </Message>
        ) : (
          <MiaudeloList>
            {miaudelos.map((miaudelo, index) => (
              <Card key={index}>{}</Card>
            ))}
          </MiaudeloList>
        )}
        <Button onClick={handleAddMiaudelo}>Adicionar Miaudelo</Button>
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

const Button = styled.button``;

const MiaudeloList = styled.div``;

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
