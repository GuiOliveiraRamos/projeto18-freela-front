import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <MobileMenuButton onClick={toggleMenu}>
        <FaBars />
      </MobileMenuButton>
      <Title>
        <h1>
          Agência
          <br /> MiauMiau
        </h1>
      </Title>

      <ContentDesktop>
        <MenuItem onClick={() => navigate("/homepage")}>Home</MenuItem>
        <MenuItem onClick={() => navigate("/miaudelos")}>Miaudelos</MenuItem>
        <MenuItem onClick={() => navigate("/my-miaudelos")}>
          Meu perfil
        </MenuItem>
        <MenuItem>Sobre nós</MenuItem>
        <MenuItem>Contato</MenuItem>
      </ContentDesktop>
      {isMenuOpen && (
        <MobileMenu>
          <MenuItem onClick={() => navigate("/homepage")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("/miaudelos")}>Miaudelos</MenuItem>
          <MenuItem onClick={() => navigate("/my-miaudelos")}>
            Meu perfil
          </MenuItem>
          <MenuItem>Sobre nós</MenuItem>
          <MenuItem>Contato</MenuItem>
        </MobileMenu>
      )}
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
  justify-content: space-between;
  align-items: center;
  background-color: #fff2eb;
  position: fixed;
  width: 100%;
  height: 120px;
  top: 0;
  left: 0;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Title = styled.div`
  width: 150px;
  display: flex;
  text-align: center;
  padding-left: 20px;
  h1 {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
  }
  @media (max-width: 768px) {
    padding-right: 60px;
  }
`;

const MobileMenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
    cursor: pointer;
    padding-left: 30px;
  }
`;

const ContentDesktop = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: #fff2eb;
    position: fixed;
    top: 120px;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 10;
  }
`;

const MenuItem = styled.p`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const SocialMedias = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
