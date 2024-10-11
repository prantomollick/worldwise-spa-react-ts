import { FC } from "react";

import AppMapTemplate from "../../templates/layouts/app/appMap/AppMap.template";
import AppSidebarTemplate from "../../templates/layouts/app/appSidebar/AppSidebar.template";
import styles from "./AppPage.module.css";

const AppPage: FC = () => {
    return (
        <div className={styles.app}>
            <AppSidebarTemplate />
            <AppMapTemplate />
        </div>
    );
};

export default AppPage;
