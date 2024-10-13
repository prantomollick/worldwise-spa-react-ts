import { FC } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import styles from "./AppFormTemplate.module.css";

// export function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

const AppFormTemplate: FC = () => {
    const navigate = useNavigate();

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState<Date | null>(new Date());
    const [notes, setNotes] = useState("");

    return (
        <form className={styles.form}>
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
                <input
                    id="date"
                    onChange={(e) => setDate(new Date(e.target.value))}
                    value={date ? date.toISOString().split("T")[0] : ""}
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
                <Button variant="primary">Add</Button>
                <Button variant="back" onClick={() => navigate(-1)}>
                    &larr; Back
                </Button>
            </div>
        </form>
    );
};

export default AppFormTemplate;
