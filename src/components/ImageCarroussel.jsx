import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ImageCarousel = ({ images }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerCarousel>
      <SliderContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </SliderContainer>
      <TextOverlay>
        <p onClick={() => navigate("/miaudelos")}>
          Conheça nossos <br />
          Miaudelos
        </p>
      </TextOverlay>
    </ContainerCarousel>
  );
};

const ContainerCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 120px;
  z-index: 1;
`;

const SliderContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 90%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 5px;

  p {
    cursor: pointer;
    color: white;
    font-size: 50px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    text-align: end;
  }

  @media (max-width: 768px) {
    p {
      margin-right: 100px;
      font-size: 36px;
      text-align: center;
    }
  }
`;

export default ImageCarousel;
