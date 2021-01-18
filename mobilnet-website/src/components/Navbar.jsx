import React from "react";
import { Link } from "react-router-dom";

// import Styles and Images
import "./styles/Navbar.css";
import Logo from "../img/logoMobilnet.jpeg";

const Navbar = () => {
  return (
    <header>
      <div class="logo">
        <figure>
          <a title="Mobilnet" href="/index.html">
            <img src={Logo} alt="logoMobilnet" />
          </a>
        </figure>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/nosotros/about-us.html">Nosotros</Link>
          </li>
          <li>
            <Link to="/productos/productos.html">Productos</Link>

            <div>
              <ul>
                <li className="titulo">
                  <Link to="">Radiocomunicación</Link>
                </li>
                <li>
                  <Link to="http://www.talkpod.com/en/Network.html">
                    Radios Lte 4G
                  </Link>
                </li>
                <li>
                  <Link to="http://www.talkpod.com/en/DMR.html">
                    Radios DMR
                  </Link>
                </li>
                <li>
                  <Link to="http://www.icomamerica.com/es/">Radios Icom</Link>
                </li>
                <li>
                  <Link to="https://www.efjohnson.com/">
                    Radios Kenwood P25
                  </Link>
                </li>
                <li>
                  <Link to="https://www.hytera.la">Radios Hytera</Link>
                </li>
                <li>
                  <Link to="https://www.motorolasolutions.com/es_xl.html?geo=redirect">
                    Radios Motorola
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="titulo azul">
                  <Link to="">Ciberseguridad</Link>
                </li>
                <li>
                  <Link to="https://www.cyberpower.com/mx/es">
                    CyberPower - UPS
                  </Link>
                </li>
                <li>
                  <Link to="https://www.watchguard.com/">Watchguard</Link>
                </li>
                <li>
                  <Link to="https://www.pfsense.org/">Servidores pfSense</Link>
                </li>
                <li>
                  <Link to="https://www.qnap.com/es-es/">Soluciones qNap</Link>
                </li>
              </ul>

              <ul>
                <li className="titulo gris">
                  <Link to="">Apple</Link>
                </li>
                <li>
                  <Link to="https://www.apple.com/mac/">Mac</Link>
                </li>
                <li>
                  <Link to="https://www.apple.com/ipad/">iPad</Link>
                </li>
                <li>
                  <Link to="https://www.apple.com/iphone/">iPhone</Link>
                </li>
                <li>
                  <Link to="https://www.apple.com/watch/">Watch</Link>
                </li>
                <li>
                  <Link to="https://www.apple.com/tv/">apple TV</Link>
                </li>
              </ul>

              <ul>
                <li className="titulo verde">
                  <Link to="">Voz Sobre IP</Link>
                </li>
                <li>
                  <Link to="https://www.sangoma.com/">Sangoma</Link>
                </li>
                <li>
                  <Link to="https://www.grandstream.com/">Grandstream</Link>
                </li>
                <li>
                  <Link to="http://www.yealink.es/">Yealink</Link>
                </li>
                <li>
                  <Link to="https://www.yeastar.com/es/">Yeastar</Link>
                </li>
              </ul>

              <ul>
                <li className="titulo rojo">
                  <Link to="">Control de Accesos</Link>
                </li>
                <li>
                  <Link to="https://visitapp.mx/">visitApp</Link>
                </li>
                <li>
                  <Link to="">Producto #4</Link>
                </li>
                <li>
                  <Link to="">Producto #5</Link>
                </li>
              </ul>

              <ul>
                <li className="titulo naranja">
                  <Link to="">Redes </Link>
                </li>
                <li>
                  <Link to="https://www.arubanetworks.com/es/">Aruba </Link>
                </li>
                <li>
                  <Link to="https://www.cambiumnetworks.com/">Cambium </Link>
                </li>
                <li>
                  <Link to="https://mikrotik.com/">Mikrotik</Link>
                </li>
                <li>
                  <Link to="https://www.ui.com/">Ubiquiti</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="#">Marcas</Link>
          </li>
          <li>
            <Link to="#">Servicios</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Contacto</Link>
          </li>
          <li>
            <Link
              className="button"
              to="http://vps231923.vps.ovh.ca:8069/shop"
              target="_blank"
            >
              Tienda
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
