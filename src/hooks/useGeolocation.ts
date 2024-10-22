import { useState } from "react";

interface IPosition {
    lat: number;
    lng: number;
}

//Define the type for the custom hook
interface IUseGeoLocation {
    isLoading: boolean;
    position: IPosition | null;
    error: string | null;
    getCurrentPosition: () => void;
}

export const useGeolocation = (
    defaultPosition: IPosition | null = null
): IUseGeoLocation => {
    const [isLoading, setisLoading] = useState(false);
    const [position, setPosition] = useState(defaultPosition);
    const [error, setError] = useState<null | string>(null);

    const getCurrentPosition = () => {
        if (!navigator.geolocation) {
            return setError("Your  browser does not support geolocation"); // Return an error if geolocation is not supported
        }
        try {
            setisLoading(true);
            navigator.geolocation.getCurrentPosition((position) => {
                setPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
            setisLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                setisLoading(false);
            }

            console.error(error);
        }
    };

    return { isLoading, position, error, getCurrentPosition }; // Return the state and the function to get the current position
};
