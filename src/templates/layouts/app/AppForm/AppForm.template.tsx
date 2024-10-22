import { FC, FormEvent, useEffect } from "react";

import { useState } from "react";

import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import Message from "../../../../components/message/Message";
import Spinner from "../../../../components/spinner/Spinner";
import Button from "../../../../components/ui/Button/Button";
import { useUrlPosition } from "../../../../hooks/useUrlPosition";
import { convertToEmoji } from "../../../../utils/utils";

import "react-datepicker/dist/react-datepicker.css";
import { TCity } from "../../../../types/cities.type";
import styles from "./AppFormTemplate.module.css";
import { useCities } from "../../../../hooks/useCities";
import clsx from "clsx";

const AppFormTemplate: FC = () => {
    const [cityName, setCityName] = useState("");
    const [countryName, setCountryName] = useState("");
    const [emoji, setEmoji] = useState("");
    const [notes, setNotes] = useState("");
    const [geocodingError, setGeocodingError] = useState("");
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const [date, setDate] = useState<Date | null>(new Date());
    const navigate = useNavigate();

    const { createCity, isLoading } = useCities();

    const { lat, lng } = useUrlPosition();

    useEffect(() => {
        if (!lat && !lng) return;

        const fetchCityData = async () => {
            try {
                setIsLoadingGeocoding(true);
                setGeocodingError("");
                const res = await fetch(
                    `${
                        import.meta.env.VITE_REVERSE_GEO_URL
                    }?latitude=${lat}&longitude=${lng}`
                );

                if (!res.ok) {
                    throw new Error("Fetching  city data failed");
                }

                const data = await res.json();

                if (!data.countryCode)
                    throw new Error(
                        "That doesn't seem to be a city. Click somewhere else 😔"
                    );

                setCityName(data.city || data.locality || "");
                setCountryName(data.countryName);
                setEmoji(convertToEmoji(data.countryCode));
            } catch (error) {
                if (error instanceof Error) {
                    setGeocodingError(error.message);
                }
            } finally {
                setIsLoadingGeocoding(false);
            }
        };

        fetchCityData();
    }, [lat, lng]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newCity: TCity = {
            id: crypto.randomUUID(),

            cityName,
            country: countryName,
            date,
            notes,
            emoji,
            position: { lat, lng },
        };
        await createCity(newCity);
        navigate("/app/cities");
    };

    if (isLoadingGeocoding) return <Spinner />;
    if (!lat && !lng)
        return <Message message="Start by clicking somewhere on the map" />;
    if (geocodingError) return <Message message={geocodingError} />;

    return (
        <form
            className={clsx(styles.form, isLoading ? styles.loading : "")}
            onSubmit={handleSubmit}
        >
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    onChange={(e) => setCityName(e.target.value)}
                    value={cityName}
                />
                {/* <span className={styles.flag}>{emoji}</span> */}
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                {/* <input
                    id="date"
                    onChange={(e) => setDate(new Date(e.target.value))}
                    value={date ? date.toISOString().split("T")[0] : ""}
                /> */}
                <DatePicker
                    id="date"
                    onChange={(date) => setDate(date)}
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">
                    Notes about your trip to {cityName}
                </label>
                <textarea
                    id="notes"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />
            </div>

            <div className={styles.buttons}>
                <Button type="submit" variant="primary">
                    Add
                </Button>
                <Button variant="back" onClick={() => navigate(-1)}>
                    &larr; Back
                </Button>
            </div>
        </form>
    );
};

export default AppFormTemplate;
