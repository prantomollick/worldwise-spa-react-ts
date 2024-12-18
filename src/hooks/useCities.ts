import { useContext } from "react";
import { CitiesContext } from "../contexts/citiesContext";

export const useCities = () => {
    const context = useContext(CitiesContext);

    if (!context) {
        throw new Error("useCities must be used within a CitiesProvider");
    }

    return context;
};
