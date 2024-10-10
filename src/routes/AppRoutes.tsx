import { RouteProps } from "react-router-dom";

import NotFoundPage from "../pages/NotFound.page";
import pagesConfig from "../config/pages.config";

const AppRoutes: RouteProps[] = [
    {
        path: pagesConfig.appPage.subPages.citiesPage.to,
        element: <p>List of sdfsafasf</p>
    },
    {
        path: pagesConfig.appPage.subPages.countriesPage.to,
        element: <p>List of countries</p>
    },
    { path: "*", element: <NotFoundPage /> }
];

export default AppRoutes;
