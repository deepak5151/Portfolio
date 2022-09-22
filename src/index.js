import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
