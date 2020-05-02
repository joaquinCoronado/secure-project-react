import React, { Component } from "react";
import { UserConsumer } from "../context/UserContext";

class Home extends Component {
  render() {
    return (
      // Usamos el consumer del contexto para acceder
      // al estado global de nuestra aplicación
      <UserConsumer>
        {/* Usamos una funcion donde "value" es el estado global
        de nuestra aplicación y regresamos el componente. */}
        {(value) => {
          let { user } = value;
          //regresamos el JSX de nuetro componente.
          return (
            <div>
              <p>Secure Project: {user.name}</p>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Home;
