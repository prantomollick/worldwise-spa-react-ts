import { FC } from "react";
import Message from "../../../../components/message/Message";
import Spinner from "../../../../components/spinner/Spinner";
import { useCities } from "../../../../hooks/useCities";

import type { countries } from "../../../../components/types/countries.type";
import styles from "./AppCountryListTemplate.module.css";
import AppCountryItemPart from "./_parts/AppCountryItem.part";

const AppCountryListTemplate: FC = () => {
    const { isLoading, cities } = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your firsst city by clicking on a city on the map" />
        );

    const countries: countries = [];

    return (
        <ul className={styles.cityList}>
            {countries.map((country) => (
                <AppCountryItemPart key={country.id} country={country} />
            ))}
        </ul>
    );
};

export default AppCountryListTemplate;
