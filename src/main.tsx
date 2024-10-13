import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CitiesProvider } from "./contexts/citiesContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CitiesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CitiesProvider>
    </StrictMode>
);
