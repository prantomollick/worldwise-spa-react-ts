import { FC } from "react";
import { type city } from "../../../../../components/types/cities.type";

import { formatDate } from "../../../../../components/utils/dateUtils";
import styles from "./CityItemParts.module.css";

interface IAppCityItemPart {
    city: city;
}

const AppCityItemPart: FC<IAppCityItemPart> = ({ city }) => {
    const { emoji, cityName, date } = city;

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
};

export default AppCityItemPart;
