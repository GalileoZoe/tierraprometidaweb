import React from "react";
import { useService } from "../../context/ServiceContext";
import {
  FaAppleAlt,
  FaSpa,
  FaUserMd,
  FaUsers,
  FaHeart,
  FaUser,
  FaFutbol,
  FaPaintBrush,
  FaMusic,
  FaWindowClose,
} from "react-icons/fa";

interface WindowProps {
  action?: () => void;
  button?: string;
  description?: string;
  href?: string;
  tittle?: string;
  image?: string;
}

export const Window: React.FC<WindowProps> = ({
  action,
  button,
  href,
  tittle,
  description,
  image,
}) => {
  const { service, changeService } = useService();

  const Icons = () => {
    switch (service) {
      case 1:
        return <FaSpa className="icon" onClick={() => changeService(0)} />;
      case 2:
        return <FaUserMd className="icon" onClick={() => changeService(0)} />;
      case 3:
        return <FaAppleAlt className="icon" onClick={() => changeService(0)} />;
      case 4:
        return <FaUsers className="icon" onClick={() => changeService(0)} />;
      case 5:
        return <FaHeart className="icon" onClick={() => changeService(0)} />;
      case 6:
        return <FaUser className="icon" onClick={() => changeService(0)} />;
      case 7:
        return <FaFutbol className="icon" onClick={() => changeService(0)} />;
      case 8:
        return (
          <FaPaintBrush className="icon" onClick={() => changeService(0)} />
        );
      case 9:
        return <FaMusic className="icon" onClick={() => changeService(0)} />;
      default:
        return null;
    }
  };

  return (
    <div className="window">
      <br />
      <FaWindowClose
        className="icon"
        style={{ float: "right", paddingRight: "20px" }}
        onClick={() => changeService(0)}
      />
      <h1 className="title">{tittle}</h1>
      <Icons />
      <p className="paragraph">{description}</p>
      <a href={href} onClick={action} className="windowbutton">
        {button}
      </a>
      <br />
      <br />
    </div>
  );
};
