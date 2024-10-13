import React from "react";

import { useParams, useSearchParams } from "react-router-dom";

import styles from "./AppCityItem.module.css";

type TCityParams = {
    cityId: string;
};

const AppCityItemTemplate = () => {
    const { cityId } = useParams<TCityParams>();

    const [searchParams, setSearchParams] = useSearchParams({});

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");


    return (
        <div>
            <h1>City {cityId}</h1>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
            <button onClick={() => setSearchParams({ lat: "23", lng: "50" })}>
                Position
            </button>
        </div>
    );
};

export default AppCityItemTemplate;
