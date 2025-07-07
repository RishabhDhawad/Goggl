import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContextProvider>
);
