import { styled } from "styled-components";
import Header from "./Header";
import gato1 from "../assets/gato1.jpeg";
import gato2 from "../assets/gato2.jpeg";
import jorginho from "../assets/jorginho.jpeg";

export default function Miaudelos() {
  return (
    <>
      <Header />
      <ContainerPage>
        <Title>
          <h1>CONHEÇA NOSSOS MIAUDELOS</h1>
        </Title>
        <ContainerCards>
          <Card>
            <img src={gato1} />
            <h2>Nome do gato</h2>
            <h3>descrição</h3>
            <p>VER MAIS</p>
          </Card>
          <Card>
            <img src={gato2} />
            <h2>Nome do gato</h2>
            <h3>descrição</h3>
            <p>VER MAIS</p>
          </Card>
          <Card>
            <img src={jorginho} />
            <h2>Jorginho</h2>
            <h3>descrição</h3>
            <p>VER MAIS</p>
          </Card>
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
  padding: 70px 0 70px 0;
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
  justify-content: space-around;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #a1572f;
  img {
    padding-top: 10px;
    width: 150px;
  }
  &:first-of-type img {
    width: 107px;
  }
  &:nth-of-type(3) img {
    width: 170px;
  }
`;
