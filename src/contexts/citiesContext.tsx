import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
} from "react";
import { TCities, TCity } from "../types/cities.type";
import { throwFetchResError } from "../utils/utils";

enum ENActionTypes {
    LOADING = "loading",
    CITIES_LOADED = "cities/loaded",
    CITY_LOADED = "city/loaded",
    CITY_CREATED = "city/created",
    CITY_DELETED = "city/deleted",
    REJECTED = "rejected",
}

interface ICitiesContextProps {
    cities: TCities;
    isLoading: boolean;
    currentCity: TCity | null;
    error: string;
    getCity: (id: string) => Promise<void>;
    createCity: (newCity: TCity) => Promise<void>;
    deleteCity: (id: string) => Promise<void>;
}
export const CitiesContext = createContext<ICitiesContextProps>({
    cities: [],
    isLoading: false,
    currentCity: null,
    error: "",
    getCity: () => Promise.resolve(),
    createCity: () => Promise.resolve(),
    deleteCity: () => Promise.resolve(),
} as ICitiesContextProps);

interface IInitialState {
    cities: TCity[];
    isLoading: boolean;
    currentCity: TCity | null;
    error: string;
}

type TActions =
    | { type: ENActionTypes.LOADING }
    | { type: ENActionTypes.CITIES_LOADED; payload: TCity[] }
    | { type: ENActionTypes.CITY_LOADED; payload: TCity }
    | { type: ENActionTypes.CITY_CREATED; payload: TCity }
    | { type: ENActionTypes.CITY_DELETED; payload: string }
    | { type: ENActionTypes.REJECTED; payload: string };

const initialState: IInitialState = {
    cities: [],
    isLoading: false,
    currentCity: null,
    error: "",
};

const reducer = (state: IInitialState, action: TActions): IInitialState => {
    switch (action.type) {
        case ENActionTypes.LOADING:
            return { ...state, isLoading: true };

        case ENActionTypes.CITIES_LOADED:
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            };

        case ENActionTypes.CITY_LOADED:
            return {
                ...state,
                isLoading: false,
                currentCity: action.payload,
            };

        case ENActionTypes.CITY_CREATED:
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload,
            };

        case ENActionTypes.CITY_DELETED:
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
                currentCity: null,
            };

        case ENActionTypes.REJECTED:
            return {
                ...state,
                error: action.payload,
            };

        default:
            throw new Error("Unknown action type");
    }
};

export const CitiesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function fetchCities() {
            try {
                dispatch({ type: ENActionTypes.LOADING });

                const apiURL = import.meta.env.VITE_API_SERVER_URL + "/cities";
                const res = await fetch(apiURL);

                if (!res.ok) {
                    throwFetchResError("Failed to fetch cities", res);
                }

                const citiesData = await res.json();
                dispatch({
                    type: ENActionTypes.CITIES_LOADED,
                    payload: citiesData,
                });
            } catch (error) {
                if (error instanceof Error) {
                    dispatch({
                        type: ENActionTypes.REJECTED,
                        payload:
                            error.message ||
                            "There was an error loading data...",
                    });
                }
            }
        }
        fetchCities();
    }, []);

    const getCity = useCallback(
        async (id: string) => {
            console.log(id, currentCity?.id);

            if (id === currentCity?.id) return; // If the city is already loaded, return immediately

            dispatch({ type: ENActionTypes.LOADING });

            try {
                const apiURL =
                    import.meta.env.VITE_API_SERVER_URL + `/cities/${id}`;
                const res = await fetch(apiURL);

                if (!res.ok) {
                    throwFetchResError("Failed to fetch city", res);
                }

                const cityData = await res.json();
                dispatch({
                    type: ENActionTypes.CITY_LOADED,
                    payload: cityData,
                });
            } catch (error) {
                if (error instanceof Error) {
                    dispatch({
                        type: ENActionTypes.REJECTED,
                        payload: error.message || "Error fetching city",
                    });
                }
            }
        },
        [currentCity]
    );

    const createCity = useCallback(async (newCity: TCity) => {
        dispatch({ type: ENActionTypes.LOADING });

        try {
            const apiURL = `${import.meta.env.VITE_API_SERVER_URL}/cities`;
            const res = await fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throwFetchResError("Failed to create city!", res);
            }

            const cityData = await res.json();

            dispatch({ type: ENActionTypes.CITY_CREATED, payload: cityData });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({
                    type: ENActionTypes.REJECTED,
                    payload: error.message || "Error fetching city",
                });
            }
        }
    }, []);

    const deleteCity = useCallback(async (id: string) => {
        dispatch({ type: ENActionTypes.LOADING });
        try {
            const apiURL = `${
                import.meta.env.VITE_API_SERVER_URL
            }/cities/${id}`;
            const res = await fetch(apiURL, {
                method: "DELETE",
            });

            if (!res.ok) {
                throwFetchResError("Failed to delete city!", res);
            }

            dispatch({ type: ENActionTypes.CITY_DELETED, payload: id });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({
                    type: ENActionTypes.REJECTED,
                    payload: error.message || "Error deleting city:",
                });
            }
        }
    }, []);

    const values: ICitiesContextProps = useMemo(
        () => ({
            cities,
            isLoading,
            currentCity,
            error,
            getCity,
            createCity,
            deleteCity,
        }),
        [cities, isLoading, currentCity, error, getCity, createCity, deleteCity]
    );

    return (
        <CitiesContext.Provider value={values}>
            {children}
        </CitiesContext.Provider>
    );
};
