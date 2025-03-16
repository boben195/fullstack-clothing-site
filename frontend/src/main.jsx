import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrouserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrouserRouter>
      <App />
    </BrouserRouter>
  </StrictMode>
);
