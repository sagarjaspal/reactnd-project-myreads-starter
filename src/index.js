import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import MyReads from "./components/Template/MyReads";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <MyReads />
  </BrowserRouter>,
  document.getElementById("root")
);
