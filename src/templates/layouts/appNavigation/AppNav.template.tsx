import Nav, { NavItem } from "../../../components/layouts/navigation/Nav";
import pagesConfig from "../../../config/pages.config";
import styles from "./AppNavTemplate.module.css";

function AppNavTemplate() {
    return (
        <nav className={styles.nav}>
            <Nav>
                {Object.values(pagesConfig.appPage.subPages).map((page) => (
                    <NavItem key={page.id} to={page.to}>
                        {page.text}
                    </NavItem>
                ))}
            </Nav>
        </nav>
    );
}

export default AppNavTemplate;
