import { Link } from "react-router-dom";
import styles from "./LogoTemplate.module.css";

function LogoTemplate() {
    return (
        <Link to="/">
            <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
        </Link>
    );
}

export default LogoTemplate;
