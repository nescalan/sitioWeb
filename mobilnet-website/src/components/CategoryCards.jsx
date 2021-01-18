// import Libraries
import React from "react";
import { Link } from "react-router-dom";

// import Styles and Images
import radioComunicacion from "../img/radiocomunicacion.jpg";
import ciberseguridad from "../img/cybersecurity.png";
import macbook from "../img/macbook.jpg";
import "./styles/CategoryCards.css";

// import Components

const CategoryCards = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div class="card">
          <img src={radioComunicacion} alt="Radiocomunicacion" />
          <h4>Radiocomunicación</h4>
          <p>
            Nuestros sistemas de seguridad informática se enfocan en aumentar la
            productividad del usuario y en la protección de la infraestructura
            computacional.
          </p>
          <Link to="/">Leer más</Link>
        </div>

        <div class="card">
          <img src={ciberseguridad} alt="Ciberseguridad" />
          <h4>Ciberseguridad</h4>
          <p>
            Los radios LTE y DMR de TALKPOD son la solución para los
            profesionales que necesitan un radio resistente y confiable para
            permanecer en contacto.
          </p>
          <Link to="/">Leer más</Link>
        </div>

        <div class="card">
          <img src={macbook} alt="MacBook" />
          <h4>Ciberseguridad</h4>
          <p>
            La sencilla interfaz del MacOS X le permite al usuario volverse
            productivo, creativo y altamente eficiente, tanto en la oficina como
            en el hogar.
          </p>
          <Link to="/">Leer más</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryCards;
