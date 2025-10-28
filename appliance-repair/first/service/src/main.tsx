import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/context/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";

import "./assets/global.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="ar" storageKey="service-app-eg">
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
