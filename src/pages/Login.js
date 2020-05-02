import React, { Component } from "react";
import { saveToken } from "../Utils/authUtils";
import UserContext from "../context/UserContext";

export default class Login extends Component {
  state = { email: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    let token = btoa(email + ":" + password);
    console.log("base 64", token);
    console.log("context", this.context);
    this.context.handleUser({
      name: "joaquin",
      email: "joaquin@hotmail.com",
      role: "admin",
    });
    saveToken("basic " + token);
    this.props.history.push("/");
  };

  render() {
    let { email, password } = this.state;
    return (
      <div>
        <p>Login</p>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <label className="active" htmlFor="password">
                  password
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button
                  style={{ width: "100%" }}
                  className="waves-effect waves-light btn-small teal"
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.contextType = UserContext;
