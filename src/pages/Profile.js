import React, { Component } from "react";
import Axios from "../config/axios";
import { NewUserConsumer } from "../context/NewUserContext";

class Profile extends Component {
  async componentDidMount() {
    console.log("Didmount");
    try {
      let response = await Axios.get("/posts");
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <NewUserConsumer>
        {value => {
          let { name, age } = value;
          return (
            <div>
              <p>Perfil</p>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
            </div>
          );
        }}
      </NewUserConsumer>
    );
  }
}

export default Profile;
