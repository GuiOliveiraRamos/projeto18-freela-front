import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VacationModal from "./ModalVacation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Profile() {
  const [miaudelos, setMiaudelos] = useState([]);
  const [showVacationModal, setShowVacationModal] = useState(false);
  const [selectedVacationDate, setSelectedVacationDate] = useState(new Date());
  const [selectedMiaudeloId, setSelectedMiaudeloId] = useState(null);
  const navigate = useNavigate();
  const sessionId = localStorage.getItem("sessionId");

  useEffect(() => {
    if (!sessionId) return navigate("/");

    console.log("sessionId:", sessionId);
    axios
      .get(`${import.meta.env.VITE_API_URL}/my-miaudelos`, {
        headers: {
          Authorization: sessionId,
        },
      })
      .then((response) => {
        console.log("Response Data:", response.data);
        setMiaudelos(response.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
        console.log("Response Data:", error.response.data);
        navigate("/");
      });
  }, []);

  const handleDelete = async (miaudeloId) => {
    const shouldDelete = window.confirm(
      "Tem certeza que deseja deletar esse miaudelo?"
    );

    if (shouldDelete) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/my-miaudelos/${miaudeloId}`,
          {
            headers: {
              Authorization: sessionId,
            },
          }
        );

        const updatedMiaudelos = miaudelos.filter(
          (miaudelo) => miaudelo.id !== miaudeloId
        );
        setMiaudelos(updatedMiaudelos);
      } catch (error) {
        console.log("Axios Error:", error);
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleVacationConfirm = async (miaudeloId, vacationDate) => {
    const newDate = new Date(vacationDate);
    const stringDate = newDate.toISOString();
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/my-miaudelos/${miaudeloId}/vacation`,
        { vacationDate: stringDate },
        {
          headers: {
            Authorization: sessionId,
          },
        }
      );

      const updatedMiaudelos = miaudelos.map((miaudelo) => {
        if (miaudelo.id === miaudeloId) {
          return { ...miaudelo, return_date: vacationDate };
        }
        return miaudelo;
      });
      setMiaudelos(updatedMiaudelos);
    } catch (error) {
      console.log("Axios Error:", error);
      console.log("Response Data:", error.response.data);
    }
  };

  const handleShowDetails = (id) => {
    navigate(`/miaudelos/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("sessionId");
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>MEUS MIAUDELOS</h1>
        </Title>

        {miaudelos.length === 0 ? (
          <>
            <Message>
              <p>Você ainda não possui nenhum Miaudelo</p>
            </Message>{" "}
          </>
        ) : (
          <MiaudeloList>
            {miaudelos.map((miaudelo) => (
              <Card key={miaudelo.id}>
                <img src={miaudelo.image} alt={`Miaudelo ${miaudelo.id}`} />
                <h2>{miaudelo.name}</h2>
                <h3>{miaudelo.description}</h3>
                <div>
                  <p onClick={() => handleShowDetails(miaudelo.id)}>VER MAIS</p>
                  <p
                    onClick={() => {
                      setSelectedMiaudeloId(miaudelo.id);
                      setShowVacationModal(true);
                    }}
                  >
                    FERIAS
                  </p>
                  <p onClick={() => handleDelete(miaudelo.id)}>EXCLUIR</p>
                </div>
              </Card>
            ))}
            {showVacationModal && (
              <VacationModal
                show={showVacationModal}
                onClose={() => setShowVacationModal(false)}
                onConfirm={(date) => {
                  handleVacationConfirm(selectedMiaudeloId, date);
                  setSelectedVacationDate(date);
                  setShowVacationModal(false);
                }}
                selectedDate={selectedVacationDate}
              />
            )}
          </MiaudeloList>
        )}
        <Button onClick={() => navigate("/new-miaudelo")}>
          Adicionar Miaudelo
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
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
  padding: 60px 0 60px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 60px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;
const Message = styled.div`
  p {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }
`;

const MiaudeloList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Button = styled.button`
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

  button:hover {
    background-color: #ffc8a3;
  }

  button:active {
    transform: scale(0.98);
  }
`;

const Card = styled.div`
  margin-bottom: 30px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 500;
  }
  h3 {
    padding: 0 20px 0 20px;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 400;
  }
  div {
    width: 250px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    p {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: #4b4a4a;
      cursor: pointer;
    }
  }
`;
