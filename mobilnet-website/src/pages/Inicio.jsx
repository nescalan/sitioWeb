// import Libraries
import React from "react";

// import Styles and Images
import "./styles/Inicio.css";
import "bootstrap/dist/css/bootstrap.css";

// import Components
import CategoryCards from "../components/CategoryCards";

const Inicio = () => {
  return (
    <React.Fragment>
      <section class="hero-section">
        <div class="hero-container">
          <div class="hero-slogan">
            <h1>Soluciones de Radiocomunicación</h1>
            <p>
              Brindamos un servicio de comunicación grupal, que comunica a su
              equipo con solo presionar un botón a través de diferentes redes y
              dispositivos.
            </p>
          </div>
        </div>
      </section>

      <CategoryCards />
    </React.Fragment>
  );
};

export default Inicio;
