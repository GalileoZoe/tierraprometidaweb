import React, { useState, useEffect } from "react";
import { useFeed } from "../../context/FeedContext";
import { useTheme } from "../../context/ThemeContext";
import {
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaComment,
  FaEnvelope,
} from "react-icons/fa";

export const Feed: React.FC = () => {
  const { changeFeed } = useFeed();
  const { theme } = useTheme();

  // Estado para manejar el icono actual
  const [iconIndex, setIconIndex] = useState(0);

  // Array de íconos
  const icons = [
    <FaPhone className="icon" />,
    <FaComment className="icon" />,
    <FaWhatsapp className="icon" />,
    <FaFacebook className="icon" />,
    <FaEnvelope className="icon" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    // Cleanup al desmontar el componente
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <section className="section">
      <h1 className={`fade-in-element`} style={{ color: "transparent" }}>
        Tierra Prometida
      </h1>

      <br />
      <br />

      <div onClick={() => changeFeed(6)} style={{ cursor: "pointer" }}>
        <img
          src={require(`../../assets/logo-0${theme === 2 ? "8" : "9"}.png`)}
          alt="Logo Tierra Prometida"
        />
        <p className="item fade-in-element">24 horas</p>

        <p className="text">Previniendo y liberando adicciones</p>

        <img
          className="logo"
          src={require(`../../assets/logo-1${theme === 2 ? "2" : "2"}.png`)}
          alt="Logo Tierra Prometida"
        />
        <br />
        <div className="center fade-in-element">
          <br />
          <br />

          <button
            className="icon fade-in-element"
            title="Contacto"
            onClick={() => changeFeed(6)}
          >
            {icons[iconIndex]}
            <p className="button">Contactáctanos</p>
          </button>
        </div>
      </div>
    </section>
  );
};
