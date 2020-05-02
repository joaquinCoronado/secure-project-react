import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { NewUserProvider } from "../src/context/NewUserContext";

ReactDOM.render(
  <React.StrictMode>
    <NewUserProvider>
      <Router />
    </NewUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
