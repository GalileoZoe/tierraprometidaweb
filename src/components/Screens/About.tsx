import React, { useEffect, useState } from "react";
import "../../App.css";
import { FaInfoCircle } from "react-icons/fa";

export const About = () => {
  // Estado para manejar el icono actual
  const [iconIndex, setIconIndex] = useState(0);

  // Array de íconos
  const icons = [<FaInfoCircle className="icon" key={0} />];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <section className="section">
      <div className="about-header">
        <h1 className="title">Nosotros</h1>
        <img
          className="img"
          src={require("../../assets/logo-09.png")}
          alt="Logo"
        />
        <p className="item">24 horas</p>
        <p className="paragraph fade-in-element">La Semilla Eres Tú</p>
      </div>

      <div className="image-description">
        <p className="description">
          Aquí puedes añadir una breve descripción que resalte la importancia de
          Tierra Prometida.
        </p>
      </div>

      <div className="cards-container">
        <div className="card">
          <h2>Misión</h2>
          <p>Breve descripción de la misión.</p>
        </div>
        <div className="card">
          <h2>Visión</h2>
          <p>Breve descripción de la visión.</p>
        </div>
        <div className="card">
          <h2>Valores</h2>
          <p>Breve descripción de los valores.</p>
        </div>
      </div>

      <br />
      <img
        src={require("../../assets/logo-12.png")}
        alt="Descripción"
        className="imgs"
      />
      <br />

      <button
        className="icon fade-in-element"
        title="Contacto"
        onClick={() => {
          /* Aquí puedes manejar la acción */
        }}
      >
        {icons[iconIndex]} {/* Utilizar el icono actual */}
        <p className="button">Más Información</p>
      </button>
    </section>
  );
};
