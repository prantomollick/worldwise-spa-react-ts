import { RouteProps } from "react-router-dom";

import NotFoundPage from "../pages/NotFound.page";
import pagesConfig from "../config/pages.config";
import AppCityListTemplate from "../templates/layouts/app/appCityList/AppCityList.template";
import AppCountryListTemplate from "../templates/layouts/app/appCountryList/AppCountryList.template";

const AppRoutes: RouteProps[] = [
    {
        index: true,
        path: pagesConfig.appPage.to,
        element: <AppCityListTemplate />
    },
    {
        path: pagesConfig.appPage.subPages.citiesPage.to,
        element: <AppCityListTemplate />
    },
    {
        path: pagesConfig.appPage.subPages.countriesPage.to,
        element: <AppCountryListTemplate />
    },
    { path: "*", element: <NotFoundPage /> }
];

export default AppRoutes;
