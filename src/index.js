import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);
