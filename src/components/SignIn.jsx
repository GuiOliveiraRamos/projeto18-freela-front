import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/`,
        loginData
      );
      console.log(response.data);
      const sessionId = response.data.sessionId;

      localStorage.setItem("sessionId", sessionId);
      navigate("/homepage");
    } catch (error) {
      if (error.response.status === 401) {
        alert("Usuário ou senha incorretos");
      } else {
        alert("Usuário não cadastrado");
      }
    }
  };
  return (
    <BackgroundContainer>
      <BackgroundImage />
      <Container>
        <Header />
        <Forms>
          <h1>LOGIN</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 to={"/signup"}>
            Ainda não possui conta? <Link to={"/signup"}>Cadastre-se</Link>
          </h3>
          <button type="submit" onClick={handleSignIn}>
            Entrar
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
