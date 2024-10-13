import { FC } from "react";
import Spinner from "../../../../components/spinner/Spinner";
import { useCities } from "../../../../hooks/useCities";

import Message from "../../../../components/message/Message";
import AppCityListPart from "./_parts/AppCityList.parts";
import styles from "./AppCityListTemplate.module.css";
import { useSearchParams } from "react-router-dom";

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
                <AppCityListPart key={city.id} city={city} />
            ))}
        </ul>
    );
};

export default AppCityListTemplate;
