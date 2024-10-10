import React, { FC } from "react";

import styles from "./AppPage.module.css";
import AppSidebarTemplate from "../../templates/layouts/appSidebar/AppSidebar.template";
import AppMapTemplate from "../../templates/layouts/appMap/AppMap.template";

const AppPage: FC = () => {
    return (
        <div className={styles.app}>
            <AppSidebarTemplate />
            <AppMapTemplate />
        </div>
    );
};

export default AppPage;
