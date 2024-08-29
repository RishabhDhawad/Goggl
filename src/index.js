import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </StateContextProvider>
);
