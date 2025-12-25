// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { LangProvider, useLang } from "./context/LangContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function Root() {
  const { lang } = useLang();

  // Switch font based on selected language
  const fontClass = lang === "bn" ? "font-bn" : "font-sans";

  return (
    <div className={fontClass}>
      <App />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <LangProvider>
        <Root />
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
);
