import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// hold the timerId in a Global/ window variable
window.timerId = 0;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
