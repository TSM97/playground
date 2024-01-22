import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NextUIProvider from "./Context/NextUIProvider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
