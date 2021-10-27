import React from "react";
import ReactDom from "react-dom";
import "./stylesheet/style.css";
import App from "./components/App";

ReactDom.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
document.getElementById("root"));