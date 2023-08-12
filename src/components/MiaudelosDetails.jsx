import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

export default function MiaudeloDetails() {
  const { id } = useParams();
  const [miaudelo, setMiaudelo] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/miaudelos/${id}`)
      .then((response) => {
        setMiaudelo(response.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
        console.log("Response Data:", error.response.data);
      });
  }, [id]);

  if (!miaudelo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h1>{miaudelo.name}</h1>
        <img src={miaudelo.image} alt={miaudelo.name} />
        <p>{miaudelo.description}</p>
        <p>Dono: {miaudelo.dono}</p>
        <p>Contato: {miaudelo.contato}</p>
      </div>
    </>
  );
}
