import Nav, { NavItem } from "../../../components/layouts/navigation/Nav";
import { appPages } from "../../../config/pages.config";
import styles from "./AppNavTemplate.module.css";

function AppNavTemplate() {
    return (
        <nav className={styles.nav}>
            <Nav>
                {Object.keys(appPages).map((page) => (
                    <NavItem key={appPages[page].id} to={appPages[page].to}>
                        {appPages[page].text}
                    </NavItem>
                ))}
            </Nav>
        </nav>
    );
}

export default AppNavTemplate;
