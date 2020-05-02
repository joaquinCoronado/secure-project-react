import React, { Component } from "react";
import Header from "./Header";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Layout extends Component {
  render() {
    let { children } = this.props;
    console.log(history.location.pathname);
    return (
      <div>
        <Header />
        <div className="container">
          <div className="card-panel">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
