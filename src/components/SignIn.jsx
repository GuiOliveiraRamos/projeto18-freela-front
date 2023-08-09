import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log("loginData:", loginData);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/`, loginData);
      navigate("/home");
    } catch (error) {
      console.log("Axios Error:", error);
      console.log("Response Data:", error.response.data);
    }
    navigate("/home");
  };
  return (
    <Container>
      <Forms>
        <h1>Login</h1>
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
        <button type="submit" onClick={handleSignIn}>
          Entrar
        </button>
        <Link to={"/signup"}>Ainda não possui conta? Cadastre-se</Link>
      </Forms>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
    margin: 10px;
    width: 300px;
    height: 30px;
  }
`;
