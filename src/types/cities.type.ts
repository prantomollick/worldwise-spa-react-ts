export type TCity = {
    cityName: string;
    country: string;
    emoji: string;
    date: Date | string | null;
    notes: string;
    position: {
        lat: number;
        lng: number;
    };
    id: number | string;
};

export type TCities = TCity[];
