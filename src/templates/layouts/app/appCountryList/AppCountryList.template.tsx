import { FC } from "react";
import Message from "../../../../components/message/Message";
import Spinner from "../../../../components/spinner/Spinner";
import { useCities } from "../../../../hooks/useCities";

import type { countries } from "../../../../components/types/countries.type";
import styles from "./AppCountryListTemplate.module.css";
import AppCountryItemPart from "./_parts/AppCountryItem.part";
import type { city } from "../../../../components/types/cities.type";

const AppCountryListTemplate: FC = () => {
    const { isLoading, cities } = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your firsst city by clicking on a city on the map" />
        );

    const countries = cities.reduce((arr: countries, city: city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            return arr;
        }
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <AppCountryItemPart key={country.country} country={country} />
            ))}
        </ul>
    );
};

export default AppCountryListTemplate;
