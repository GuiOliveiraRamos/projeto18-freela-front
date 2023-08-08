import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return alert("As senhas devem ser iguais");

    const saveData = { name, phone, cpf, email, password };

    try {
      axios.post(`${import.meta.env.VITE_API_URL}/signup`, saveData);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Forms>
        <h1>Cadastro</h1>
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
        <label>
          <button type="submit" onSubmit={handleSignUp}>
            Cadastrar
          </button>
        </label>
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
