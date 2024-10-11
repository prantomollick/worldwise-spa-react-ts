import { FC } from "react";

import styles from "./AppCountryItemPart.module.css";
import type { country } from "../../../../../components/types/countries.type";

interface ICountryItemProps {
    country: country;
}

const AppCountryItemPart: FC<ICountryItemProps> = ({ country }) => {
    return (
        <li className={styles.countryItem}>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </li>
    );
};

export default AppCountryItemPart;
