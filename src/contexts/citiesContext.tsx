import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { TCities, TCity } from "../types/cities.type";

interface ICitiesContextProps {
    cities: TCities;
    isLoading: boolean;
    currentCity: TCity | null;
    getCity: (id: string) => Promise<void>;
    createCity: (newCity: TCity) => Promise<void>;
    deleteCity: (id: string) => Promise<void>;
}
export const CitiesContext = createContext<ICitiesContextProps>({
    cities: [],
    isLoading: false,
    currentCity: null,
    getCity: () => Promise.resolve(),
    createCity: () => Promise.resolve(),
    deleteCity: () => Promise.resolve(),
} as ICitiesContextProps);

interface ICitiesProvider {
    children: ReactNode;
}
export const CitiesProvider: FC<ICitiesProvider> = ({ children }) => {
    const [cities, setCities] = useState<TCities>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState<TCity | null>(null);

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const apiURL = import.meta.env.VITE_API_SERVER_URL + "/cities";
                const res = await fetch(apiURL);

                if (!res.ok) {
                    throw new Error("Failed to fetch cities");
                }

                const citiesData = await res.json();
                setCities(citiesData);
            } catch (error) {
                console.error("Error fetching cities:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);

    const getCity = useCallback(async (id: string) => {
        try {
            setIsLoading(true);
            const apiURL =
                import.meta.env.VITE_API_SERVER_URL + `/cities/${id}`;
            const res = await fetch(apiURL);

            if (!res.ok) {
                throw new Error("Failed to fetch city");
            }

            const cityData = await res.json();
            setCurrentCity(cityData);
        } catch (error) {
            console.error("Error fetching city:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const createCity = useCallback(async (newCity: TCity) => {
        try {
            setIsLoading(true);
            const apiURL = `${import.meta.env.VITE_API_SERVER_URL}/cities`;
            const res = await fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw new Error("Failed to create city!");
            }

            const cityData = await res.json();

            setCities((cities) => [...cities, cityData]);
        } catch (error) {
            console.error("Error fetching city:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const deleteCity = useCallback(async (id: string) => {
        try {
            setIsLoading(true);
            const apiURL = `${
                import.meta.env.VITE_API_SERVER_URL
            }/cities/${id}`;
            const res = await fetch(apiURL, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete city!");
            }

            setCities((cities) => cities.filter((city) => city.id !== id));
        } catch (error) {
            console.error("Error fetching city:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const values: ICitiesContextProps = useMemo(
        () => ({
            cities,
            isLoading,
            currentCity,
            getCity,
            createCity,
            deleteCity,
        }),
        [cities, isLoading, currentCity, getCity, createCity, deleteCity]
    );

    return (
        <CitiesContext.Provider value={values}>
            {children}
        </CitiesContext.Provider>
    );
};
