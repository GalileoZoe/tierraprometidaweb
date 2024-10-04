import React, { useEffect, useState } from "react";
import "../../App.css";
import { useTheme } from "../../context/ThemeContext";
import { useSession } from "../../context/SessionContext";
import {
  FaToggleOff,
  FaToggleOn,
  FaRegUser,
  FaUser,
  FaStore,
  FaSignInAlt,
  FaWifi,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  const { theme, changeTheme } = useTheme();
  const { session, changeSession } = useSession();

  // Estado para manejar la conectividad
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    // Funciones para manejar los eventos de conexión
    const handleOnline = (): void => setIsOnline(true);
    const handleOffline = (): void => setIsOnline(false);

    // Escuchar eventos de conexión
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup para eliminar los eventos al desmontar el componente
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <nav className="footer">
      <ul className="footeritems">
        <li
          className={theme === 2 ? "footeritemred" : "footeritem"}
          title="Modo Oscuro"
          onClick={() => changeTheme(theme === 1 ? 0 : 1)}
        >
          {theme === 1 ? (
            <FaToggleOff className="icon" />
          ) : (
            <FaToggleOn className="icon" />
          )}
        </li>
        <li
          className={theme === 2 ? "footeritemred" : "footeritem"}
          title="Iniciar Sesión"
          onClick={() => changeSession(1)}
        >
          {session === 0 ? (
            <FaRegUser className={theme === 2 ? "iconred" : "icon"} />
          ) : (
            <FaUser className={theme === 2 ? "iconred" : "icon"} />
          )}
        </li>
        {session === 1 && (
          <li
            className={theme === 2 ? "footeritemred" : "footeritem"}
            title="Tienda"
          >
            <FaStore className={theme === 2 ? "iconred" : "icon"} />
          </li>
        )}
        {session === 1 && (
          <li
            className={theme === 2 ? "footeritemred" : "footeritem"}
            title="Cerrar Sesión"
            onClick={() => changeSession(0)}
          >
            <FaSignInAlt className={theme === 2 ? "iconred" : "icon"} />
          </li>
        )}
        <li className={theme === 2 ? "footeritemred" : "footeritem"}>
          <FaWifi className={isOnline ? "icongreen" : "icon"} />
        </li>
      </ul>
    </nav>
  );
};
