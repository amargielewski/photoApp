import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LayoutContextProvider } from "./context/LayoutContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LayoutContextProvider>
        <App />
      </LayoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
