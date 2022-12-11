import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tokens/css/design-tokens.css";
import App from "./pages/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
