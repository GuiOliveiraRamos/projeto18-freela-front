import { styled } from "styled-components";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        <h1>
          Agência
          <br /> MiauMiau
        </h1>
      </Title>
      <Content>
        <p onClick={() => navigate("/homepage")}>Home</p>
        <p onClick={() => navigate("/miaudelos")}>Miaudelos</p>
        <p onClick={() => navigate("/profile")}>Meu perfil</p>
        <p>Sobre nós</p>
        <p>Contato</p>
      </Content>
      <SocialMedias>
        <AiOutlineFacebook />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
      </SocialMedias>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff2eb;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Title = styled.div`
  width: 150px;
  display: flex;
  text-align: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
  }
`;

const Content = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }
`;

const SocialMedias = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
`;
