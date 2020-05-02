import React, { Component } from "react";

//Es el objeto contexto con el que trabajaremos
//en todo el flujo de la applicación.
export const UserContext = React.createContext();

//Es el componente con el que obtendremos los datos
//del contexto desde otros componentes.
export const UserConsumer = UserContext.Consumer;

//Es un componente de orden superior con el que
//bamos asuscribir nuestra aplicacion al contexto
export class UserProvider extends Component {
  //Estado general de la aplicación.
  state = { user: { name: null, email: null, role: null } };

  //Metodo para actualizar el estado global.
  handleUser = user => {
    this.setState(prevState => {
      //Destructuración del usuario en el estado anterior y el nuevo
      //estado para no perder información del usuario.
      return { user: { ...prevState.user, ...user } };
    });
  };

  render() {
    //Destructuración del estado y las propiedades.
    let { user } = this.state;
    let { children } = this.props;

    return (
      <UserContext.Provider
        //Se pasa como props es el estado global y los manedajores de estado
        //para que los demás componentes de la aplicación puedan acceder a
        //estos datos.
        value={{ user, handleUser: this.handleUser }}
      >
        {/* Se renderizan los componente hijos, en nuestro caso
        es el resto de la aplicación */}
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;
