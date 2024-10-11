import { useEffect, useState } from "react";
import { cities } from "../components/types/cities.type";

export const useCities = () => {
    const [cities, setCities] = useState<cities>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const apiURL = import.meta.env.VITE_API_SERVER_URL + "/cities";
                const res = await fetch(apiURL);
                if (!res.ok)
                    throw new Error("Something went wrong to fetching  cities");
                const cities = await res.json();
                setCities(cities);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
        return () => {};
    }, []);

    return {
        cities,
        isLoading
    };
};
