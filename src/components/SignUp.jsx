import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return alert("As senhas devem ser iguais");
    }

    const saveData = { name, phone, cpf, email, password, confirmPassword };

    try {
      console.log("Sending POST request...");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        saveData
      );

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 409) {
        alert("Usuário já está cadastrado");
      } else {
        alert("Verifique seus dados");
      }
    }
  };
  return (
    <BackgroundContainer>
      <Header />
      <BackgroundImage />
      <Container>
        <Forms>
          <h1>CADASTRO</h1>
          <label htmlFor="name">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Nome"
              required
            ></input>
          </label>
          <label htmlFor="Telefone">
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              placeholder="Telefone"
              required
            ></input>
          </label>
          <label htmlFor="CPF">
            <input
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              type="number"
              placeholder="CPF"
              required
            ></input>
          </label>
          <label htmlFor="email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
            ></input>
          </label>
          <label htmlFor="password">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Senha"
              required
            ></input>
          </label>
          <label htmlFor="confirmPassword">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Confirme sua senha"
              required
            ></input>
          </label>
          <h3>
            Já tem cadastro? <Link to="/">Faça login</Link>
          </h3>
          <button type="submit" onClick={handleSignUp}>
            Cadastrar
          </button>
        </Forms>
      </Container>
    </BackgroundContainer>
  );
}
const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://i.pinimg.com/originals/1e/7e/17/1e7e173a2a6c4cfef81755042bb84f7d.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Forms = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    margin-bottom: 30px;
    margin-top: 60px;
  }

  h3 {
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
  input {
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    font-size: 16px;
    width: 280px;
    transition: border-color 0.3s;
  }

  input:focus {
    outline: none;
    border-color: #007bff;
  }

  input::placeholder {
    color: #999;
  }

  button {
    margin-top: 10px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff8431;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  button:hover {
    background-color: #ffc8a3;
  }

  button:active {
    transform: scale(0.98);
  }
`;
