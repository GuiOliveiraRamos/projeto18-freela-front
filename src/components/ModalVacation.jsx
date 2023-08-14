import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styled } from "styled-components";

export default function VacationModal({ show, onClose, onConfirm }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = () => {
    onConfirm(selectedDate);
    setSelectedDate(new Date());
    onClose();
  };

  return (
    <StyledVacationModal show={show} onHide={onClose} centered>
      <ModalContent>
        <h2>Definir Data de Retorno de Férias</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Hora"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <div>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </div>
      </ModalContent>
    </StyledVacationModal>
  );
}

const StyledVacationModal = styled(Modal)`
  width: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 40%;
  @media (max-width: 768px) {
    align-items: center;
    margin: 30%;
    width: 300px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fdcaaf;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    font-size: 16px;
    width: 200px;
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
    width: 200px;
    margin-top: 10px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff8431;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s;
    cursor: pointer;
  }

  button:hover {
    background-color: #ffc8a3;
  }

  button:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    h2 {
      text-align: center;
    }
    button {
      align-items: center;
    }
  }
`;
