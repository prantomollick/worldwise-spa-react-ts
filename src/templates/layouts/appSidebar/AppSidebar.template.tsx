import { FC } from "react";

import AppFooter from "../../../components/layouts/appFooter/AppFooter";
import LogoTemplate from "../logo/Logo.template";
import AppNavTemplate from "../appNavigation/AppNav.template";

import styles from "./AppSidebarTemplate.module.css";

const AppSidebarTemplate: FC = () => {
    return (
        <div className={styles.sidebar}>
            <LogoTemplate />
            <AppNavTemplate />
            <p>List of cities</p>
            <AppFooter className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by Worldwise
                    Inc.
                </p>
            </AppFooter>
        </div>
    );
};

export default AppSidebarTemplate;
