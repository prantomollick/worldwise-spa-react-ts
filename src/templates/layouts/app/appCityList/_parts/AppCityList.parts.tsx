import { FC } from "react";
import { type city } from "../../../../../components/types/cities.type";

import { Link } from "react-router-dom";
import { formatDate } from "../../../../../utils/dateUtils";
import styles from "./CityItemParts.module.css";

interface IAppCityItemPart {
    city: city;
}

const AppCityListPart: FC<IAppCityItemPart> = ({ city }) => {
    const { emoji, cityName, date, id, position } = city;

    return (
        <li>
            <Link
                className={styles.cityItem}
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
};

export default AppCityListPart;
