import { FC } from "react";

import Nav, { NavItem } from "../../../components/layouts/navigation/Nav";
import pagesConfig from "../../../config/pages.config";

import LogoTemplate from "../logo/Logo.template";
import styles from "./HeaderTemplate.module.css";
import { NavLink } from "react-router-dom";

const HeaderTemplate: FC = () => {
    return (
        <header className={styles.nav}>
            <LogoTemplate />

            <div className={styles.navWraper}>
                <Nav>
                    {Object.keys(pagesConfig)
                        .slice(0, 3)
                        .map((page) => (
                            <NavItem
                                to={pagesConfig[page].to}
                                key={pagesConfig[page].id}
                            >
                                {pagesConfig[page].text}
                            </NavItem>
                        ))}
                </Nav>
                <NavLink
                    to={pagesConfig["loginPage"].to}
                    className={styles.ctaLink}
                >
                    {pagesConfig["loginPage"].text}
                </NavLink>
            </div>
        </header>
    );
};

export default HeaderTemplate;
