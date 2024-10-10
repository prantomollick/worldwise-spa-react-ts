import { FC } from "react";

import Nav, { NavItem } from "../../../components/layouts/navigation/Nav";
import { headerPages } from "../../../config/pages.config";

import { NavLink } from "react-router-dom";
import LogoTemplate from "../logo/Logo.template";
import styles from "./HeaderTemplate.module.css";

const HeaderTemplate: FC = () => {
    return (
        <header className={styles.nav}>
            <LogoTemplate />

            <div className={styles.navWraper}>
                <Nav>
                    {Object.values(headerPages)
                        .slice(0, 3)
                        .map((page) => (
                            <NavItem to={page.to} key={page.id}>
                                {page.text}
                            </NavItem>
                        ))}
                </Nav>
                <NavLink
                    to={headerPages.loginPage.to}
                    className={styles.ctaLink}
                >
                    {headerPages.loginPage.text}
                </NavLink>
            </div>
        </header>
    );
};

export default HeaderTemplate;
