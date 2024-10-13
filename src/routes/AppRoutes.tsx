import { Navigate, RouteProps } from "react-router-dom";

import NotFoundPage from "../pages/NotFound.page";
import pagesConfig from "../config/pages.config";
import AppCityListTemplate from "../templates/layouts/app/appCityList/AppCityList.template";
import AppCountryListTemplate from "../templates/layouts/app/appCountryList/AppCountryList.template";
import AppCityItemTemplate from "../templates/layouts/app/AppCityItem/AppCityItem.template";
import AppFormTemplate from "../templates/layouts/app/AppForm/AppForm.template";

const AppRoutes: RouteProps[] = [
    {
        index: true,

        path: pagesConfig.appPage.to,
        element: (
            <Navigate to={pagesConfig.appPage.subPages.citiesPage.to} replace />
        )
    },
    {
        path: pagesConfig.appPage.subPages.citiesPage.to,
        element: <AppCityListTemplate />
    },
    {
        path: pagesConfig.appPage.subPages.citiesPage.subPages.cityPage.to,
        element: <AppCityItemTemplate />
    },
    {
        path: pagesConfig.appPage.subPages.countriesPage.to,
        element: <AppCountryListTemplate />
    },
    {
        path: pagesConfig.appPage.subPages.formPage.to,
        element: <AppFormTemplate />
    },
    { path: "*", element: <NotFoundPage /> }
];

export default AppRoutes;
