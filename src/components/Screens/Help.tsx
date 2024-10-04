import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useFeed } from "../../context/FeedContext";

export const Help = () => {
  const { changeFeed } = useFeed();

  return (
    <section className="section">
      <div>
        <h1 className="title">Ayuda</h1>

        <p className="paragraph">¿Tienes alguna duda o sugerencia?</p>
        <p className="paragraph">Contáctanos.</p>

        <button
          className="icon fade-in-element"
          title="Contacto"
          onClick={() => changeFeed(6)}
        >
          <FaQuestionCircle className="icon" />
          <p className="button">Ayuda</p>
        </button>
      </div>
    </section>
  );
};
