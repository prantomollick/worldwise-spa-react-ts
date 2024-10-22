import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
    const [searchParams] = useSearchParams();
    const lat: number = Number(searchParams.get("lat"));
    const lng: number = Number(searchParams.get("lng"));
    return { lat, lng };
};
