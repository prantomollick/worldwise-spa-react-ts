import React, { FC } from "react";
import { useCities } from "../../../../hooks/useCities";
import Spinner from "../../../../components/spinner/Spinner";
import AppCityItemPart from "./_parts/AppCityItem.parts";
import styles from "./AppCityListTemplate.module.css";
import Message from "../../../../components/message/Message";

const AppCityListTemplate: FC = () => {
    const { isLoading, cities } = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your firsst city by clicking on a city on the map" />
        );

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <AppCityItemPart key={city.id} city={city} />
            ))}
        </ul>
    );
};

export default AppCityListTemplate;
