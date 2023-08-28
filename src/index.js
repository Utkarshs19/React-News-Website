import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import Favicon from "react-favicon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Favicon url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzhRQoX9iVKFdSdbnZ6WMkaI2RiCztoqQFmah7Tc&s" />
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
