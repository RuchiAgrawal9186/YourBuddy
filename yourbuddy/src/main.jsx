import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SpeeachContext from "./context/SpeeachContext.jsx";

createRoot(document.getElementById("root")).render(
  <SpeeachContext>
    <App />
  </SpeeachContext>
);
