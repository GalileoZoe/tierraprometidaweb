import React, { useEffect, useState } from "react";
import "../../App.css";
import { useFeed } from "../../context/FeedContext";
import { useTheme } from "../../context/ThemeContext";
import {
  FaAppleAlt,
  FaComment,
  FaEnvelope,
  FaFacebook,
  FaFutbol,
  FaHeart,
  FaMusic,
  FaPaintBrush,
  FaPhone,
  FaSpa,
  FaUser,
  FaUserMd,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { Window } from "../Components/Window";
import { useService } from "../../context/ServiceContext";

export const Services = () => {
  const { changeFeed } = useFeed();
  const { theme } = useTheme();
  const { service, changeService } = useService();

  const Services = () => {
    switch (service) {
      case 1:
        return (
          <Window
            tittle="Temazcal"
            description="Favorece al proceso de desintoxicación y beneficia a la salud física y mental de los usuarios. ¡ Servicio abierto al público !."
            button="Más Información"
          />
        );
      case 2:
        return (
          <Window
            tittle="Psicología"
            description="Atención Psicológica Profesional individual, grupal y familiar."
            button="Más Información"
          />
        );
      case 3:
        return (
          <Window
            tittle="Nutrición"
            description="Dieta basada en alimentos frescos y naturales que ayudan en el proceso de desintoxicación del cuerpo, mejoran la salud física y brindan mayor energía; manteniendo un mejor estado de ánimo."
            button="Más Información"
          />
        );
      case 4:
        return (
          <Window
            tittle="Sesiones AL-ANON"
            description="Estrategias para saber como lidiar con personas con conductas adictivas."
            button="Más Información"
          />
        );
      case 5:
        return (
          <Window
            tittle="Desintoxicación"
            description="Temazcal, Dieta y Activación Física para desintoxicar el cuerpo."
            button="Más Información"
          />
        );
      case 6:
        return (
          <Window
            tittle="Desarrollo Humano"
            description="Ayudar a desarrollar tu potencial, así como una personalidad feliz y libre de adicciones."
            button="Más Información"
          />
        );
      case 7:
        return (
          <Window
            tittle="Activación Física"
            description="Favorece a la salud del usuario, el proceso de desintoxicación y la creación de hábitos saludables."
            button="Más Información"
          />
        );
      case 8:
        return (
          <Window
            tittle="ArteTerapia"
            description="Fomentamos actividades artísticas para estimular la creatividad y la expresión asertiva de emociones."
            button="Más Información"
          />
        );
      case 9:
        return (
          <Window
            tittle="Eventos Culturales"
            description="Conferencias, Pintura y Música en vivo y excursiones para favorecer el desarrollo de una personalidad libre de adicciones."
            button="Más Información"
          />
        );
      default:
        return null;
    }
  };

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
      <div>
        <h1 className={theme === 2 ? "titleRed" : "title"}>Servicios</h1>
        <img
          className="img"
          src={require("../../assets/logo-09.png")}
          alt="Logo de Tierra Prometida" // Agregar alt aquí
        />
        <p className="item">24 horas</p>

        {service === 0 ? (
          <div>
            <ul className="slider">
              <li
                className="item fade-in-element"
                title="Psicología"
                onClick={() => changeService(2)}
              >
                <FaUserMd className={theme === 2 ? "iconred" : "icon"} />
                <p>Psicología{"\n"}Profesional</p>
              </li>

              <li
                className="item fade-in-element"
                title="Temazcal"
                onClick={() => changeService(1)}
              >
                <FaSpa className={theme === 2 ? "iconred" : "icon"} />
                <p>Temazcal</p>
              </li>

              <li
                className="item fade-in-element"
                title="Nutrición"
                onClick={() => changeService(3)}
              >
                <FaAppleAlt className={theme === 2 ? "iconred" : "icon"} />
                <p>Nutrición</p>
              </li>
              <li
                className="item fade-in-element"
                title="AL-ANON"
                onClick={() => changeService(4)}
              >
                <FaUsers className={theme === 2 ? "iconred" : "icon"} />
                <p>Sesiones AL-ANON</p>
              </li>
              <li
                className="item fade-in-element"
                title="Desintoxicación"
                onClick={() => changeService(5)}
              >
                <FaHeart className={theme === 2 ? "iconred" : "icon"} />
                <p>Desintoxicación</p>
              </li>
              <li
                className="item fade-in-element"
                title="Desarrollo Humano"
                onClick={() => changeService(6)}
              >
                <FaUser className={theme === 2 ? "iconred" : "icon"} />
                <p>Desarrollo{"\n"} Humano</p>
              </li>
              <li
                className="item fade-in-element"
                title="Activación Física"
                onClick={() => changeService(7)}
              >
                <FaFutbol className={theme === 2 ? "iconred" : "icon"} />
                <p>Activación Física</p>
              </li>
              <li
                className="item fade-in-element"
                title="ArteTerapia"
                onClick={() => changeService(8)}
              >
                <FaPaintBrush className={theme === 2 ? "iconred" : "icon"} />
                <p>ArteTerapia</p>
              </li>
              <li
                className="item fade-in-element"
                title="Eventos Culturales"
                onClick={() => changeService(9)}
              >
                <FaMusic className={theme === 2 ? "iconred" : "icon"} />
                <p>Eventos {"\n"} Culturales</p>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <br />
            <Services />
          </div>
        )}
        <br />
        <br />
        <button // Cambiar <a> a <button> para accesibilidad
          className="icon fade-in-element"
          title="Contacto"
          onClick={() => changeFeed(6)}
        >
          {icons[iconIndex]}
          <p className="button">Contáctanos</p>
        </button>

        <br />
        <br />
      </div>
    </section>
  );
};
