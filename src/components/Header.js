import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../context/UserContext";
import { logOut } from "../Utils/authUtils";

class Header extends Component {
  render() {
    return (
      <nav className="teal">
        <div className="nav-wrapper container">
          <Link to="/">
            <div className="brand-logo">Secure App</div>
          </Link>
          <ul className="right">
            {/* Usamos el componente "UserConsumer" para acceder al 
            estado global de la aplicación. */}
            <UserConsumer>
              {value => {
                let { user } = value;
                let { role } = user;
                return (
                  <>
                    <li>
                      <Link to="/profile">
                        <div>Perfil</div>
                      </Link>
                    </li>

                    {/* Renderizamos de forma condicional las opciones
                    del menu que se mostraran si el usuario es administrador. */}
                    {role === "admin" && (
                      <li>
                        <Link to="/configuration">
                          <div>Configuración</div>
                        </Link>
                      </li>
                    )}

                    <li
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <Link to="/login">
                        <div>Log Out</div>
                      </Link>
                    </li>
                  </>
                );
              }}
            </UserConsumer>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
