import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {  GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="655305818447-bv7arekrms6pj3cllb5s7d2c37icmidj.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
