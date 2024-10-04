import React from "react";
import "../../App.css";
import { useFeed } from "../../context/FeedContext";
import { useTheme } from "../../context/ThemeContext";
import { useSession } from "../../context/SessionContext";

export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const { session } = useSession();
  const { theme } = useTheme();

  // Determina la clase del tema
  const getThemeClass = (isRed: boolean) =>
    isRed ? "navbaritemred" : "navbaritem";

  return (
    <nav className="navbar">
      <div className="navbarlogo">
        <img
          src={require(`../../assets/logo-0${theme === 2 ? "8" : "9"}.png`)}
          alt="Logo"
        />
      </div>
      <ul className="navbaritems">
        {feed !== 1 && (
          <li>
            <button
              className={getThemeClass(theme === 2)}
              onClick={() => changeFeed(1)}
            >
              Inicio
            </button>
          </li>
        )}
        <li>
          <button
            className={getThemeClass(theme === 2)}
            onClick={() => changeFeed(2)}
          >
            Nosotros
          </button>
        </li>
        <li>
          <button
            className={getThemeClass(theme === 2)}
            onClick={() => changeFeed(3)}
          >
            Servicios
          </button>
        </li>
        {session === 1 && (
          <li>
            <button
              className={getThemeClass(theme === 2)}
              onClick={() => changeFeed(7)}
            >
              Usuarios
            </button>
          </li>
        )}
        <li>
          <button
            className={getThemeClass(theme === 2)}
            onClick={() => changeFeed(5)}
          >
            Ubicación
          </button>
        </li>
        <li>
          <button
            className={getThemeClass(theme === 2)}
            onClick={() => changeFeed(6)}
          >
            Contacto
          </button>
        </li>
        <li>
          <button
            className={getThemeClass(theme === 2)}
            onClick={() => changeFeed(11)}
          >
            Ayuda
          </button>
        </li>
      </ul>
    </nav>
  );
};
