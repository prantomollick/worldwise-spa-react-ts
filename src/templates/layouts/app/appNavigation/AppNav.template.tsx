import Nav, { NavItem } from "../../../../components/layouts/navigation/Nav";
import pagesConfig from "../../../../config/pages.config";
import styles from "./AppNavTemplate.module.css";

function AppNavTemplate() {
    return (
        <Nav className={styles.nav}>
            {Object.values(pagesConfig.appPage.subPages)
                .slice(0, 2)
                .map((page) => (
                    <NavItem key={page.id} to={page.to}>
                        {page.text}
                    </NavItem>
                ))}
        </Nav>
    );
}

export default AppNavTemplate;
