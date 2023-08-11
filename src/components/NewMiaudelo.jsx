import { useState } from "react";
import Header from "./Header";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewMiaudelo() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const sessionId = localStorage.getItem("sessionId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const saveData = { image, name, description };
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/new-miaudelo`,
        saveData,
        {
          headers: {
            Authorization: sessionId,
          },
        }
      );
      alert("Miaudelo cadastrado com sucesso");
      navigate("/my-miaudelos");
    } catch (err) {
      console.log("Axios Error:", err);
      console.log("Response Data:", err.response.data);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>NOVO MIAUDELO</h1>
        </Title>
        <Forms>
          <input
            type="text"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Cadastrar
          </button>
        </Forms>
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
  padding: 60px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;
const Forms = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin: 5px;
    width: 300px;
    height: 30px;
    padding: 10px;
  }
  button {
    margin: 30px;
    width: 300px;
    height: 30px;
  }
`;
