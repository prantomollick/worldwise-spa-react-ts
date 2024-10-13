import { FC } from "react";
import type { TCity } from "../../../../../types/cities.type";

import clsx from "clsx";
import { Link } from "react-router-dom";
import { useCities } from "../../../../../hooks/useCities";
import { formatDate } from "../../../../../utils/dateUtils";
import styles from "./CityItemParts.module.css";

interface IAppCityItemPart {
    city: TCity;
}

const AppCityListPart: FC<IAppCityItemPart> = ({ city }) => {
    const { currentCity } = useCities();
    const { emoji, cityName, date, id, position } = city;

    return (
        <li>
            <Link
                className={clsx(
                    styles.cityItem,
                    currentCity?.id === id && styles[`cityItem--active`]
                )}
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
