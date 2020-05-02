import React, { Component } from "react";

//Crear el context
export const NewUserContext = React.createContext();

//Crear el consumer
export const NewUserConsumer = NewUserContext.Consumer;

//Crear el provider
export class NewUserProvider extends Component {
  state = { name: "joaquin", age: 25 };

  handlerName = name => {
    this.setState({ name });
  };

  handlerAge = age => {
    this.setState({ age });
  };

  render() {
    let { name, age } = this.state;
    let { children } = this.props;
    return (
      <NewUserContext.Provider
        value={{
          name,
          age,
          handlerName: this.handlerName,
          handlerAge: this.handlerAge,
        }}
      >
        {children}
      </NewUserContext.Provider>
    );
  }
}

export default NewUserContext;
