import { FC } from "react";

import AppMapTemplate from "../../templates/layouts/app/appMap/AppMap.template";
import AppSidebarTemplate from "../../templates/layouts/app/appSidebar/AppSidebar.template";
import styles from "./AppPage.module.css";
import UserTemplate from "../../templates/layouts/user/User.template";

const AppPage: FC = () => {
    return (
        <div className={styles.app}>
            <AppSidebarTemplate />
            <AppMapTemplate />
            <UserTemplate />
        </div>
    );
};

export default AppPage;
