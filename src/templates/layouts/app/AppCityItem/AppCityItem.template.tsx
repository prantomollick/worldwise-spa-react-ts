import { useParams } from "react-router-dom";
import { useCities } from "../../../../hooks/useCities";
import { useEffect } from "react";

import styles from "./AppCityItemTemplate.module.css";
import { formatDate } from "../../../../utils/dateUtils";
import Spinner from "../../../../components/spinner/Spinner";
import BackButton from "../../../../components/ui/BackButton";

type TCityParams = {
    cityId: string;
};

const AppCityItemTemplate = () => {
    const { cityId } = useParams<TCityParams>();
    const { isLoading, getCity, currentCity } = useCities();

    useEffect(() => {
        if (cityId) {
            getCity(cityId);
        }
    }, [cityId, getCity]);

    const { cityName, date, emoji, notes } = currentCity || {};

    return (
        <>
            {isLoading && <Spinner />}
            {!isLoading && (
                <div className={styles.city}>
                    <div className={styles.row}>
                        <h6>City name</h6>
                        <h3>
                            <span>{emoji}</span> {cityName}
                        </h3>
                    </div>

                    <div className={styles.row}>
                        <h6>You went to {cityName} on</h6>
                        <p>{date && formatDate(date)}</p>
                    </div>

                    {notes && (
                        <div className={styles.row}>
                            <h6>Your notes</h6>
                            <p>{notes}</p>
                        </div>
                    )}

                    <div className={styles.row}>
                        <h6>Learn more</h6>
                        <a
                            href={`https://en.wikipedia.org/wiki/${cityName}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Check out {cityName} on Wikipedia &rarr;
                        </a>
                    </div>

                    <div>
                        <BackButton />
                    </div>
                </div>
            )}
        </>
    );
};

export default AppCityItemTemplate;
