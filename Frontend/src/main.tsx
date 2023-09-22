import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LoaderContextProvider from "./context/LoaderContext.tsx";
import { GlobalProvider } from "./context/globalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoaderContextProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </LoaderContextProvider>
  </React.StrictMode>
);
