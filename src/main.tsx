import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import QuessingWordProvider from "./context/QuessWordProvider.tsx";
import UserQuessProvider from "./context/UserQuessProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuessingWordProvider>
      <UserQuessProvider>
        <App />
      </UserQuessProvider>
    </QuessingWordProvider>
  </React.StrictMode>
);
