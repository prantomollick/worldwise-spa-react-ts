import { FC } from "react";

import styles from "./AppCountryItemPart.module.css";
import type { country } from "../../../../../types/countries.type";

interface ICountryItemProps {
    country: country;
}

const AppCountryItemPart: FC<ICountryItemProps> = ({ country }) => {
    const { emoji, country: countryName } = country;

    return (
        <li className={styles.countryItem}>
            <span>{emoji}</span>
            <span>{countryName}</span>
        </li>
    );
};

export default AppCountryItemPart;
