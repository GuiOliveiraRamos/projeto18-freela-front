import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <Container>
      <Forms>
        <h1>Login</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onSubmit={handleSignIn}>
          Entrar
        </button>
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
