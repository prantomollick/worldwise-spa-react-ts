import { Navigate, RouteProps } from "react-router-dom";

import NotFoundPage from "../pages/NotFound.page";
import pagesConfig from "../config/pages.config";
import AppCityListTemplate from "../templates/layouts/app/appCityList/AppCityList.template";
import AppCountryListTemplate from "../templates/layouts/app/appCountryList/AppCountryList.template";
import AppCityItemTemplate from "../templates/layouts/app/AppCityItem/AppCityItem.template";
import AppFormTemplate from "../templates/layouts/app/AppForm/AppForm.template";
import { ProtectedRoute } from "../pages/ProtectedRoute";

const AppRoutes: RouteProps[] = [
    {
        index: true,

        path: pagesConfig.appPage.to,
        element: (
            <ProtectedRoute>
                <Navigate
                    to={pagesConfig.appPage.subPages.citiesPage.to}
                    replace
                />
            </ProtectedRoute>
        ),
    },
    {
        path: pagesConfig.appPage.subPages.citiesPage.to,
        element: (
            <ProtectedRoute>
                <AppCityListTemplate />,
            </ProtectedRoute>
        ),
    },
    {
        path: pagesConfig.appPage.subPages.citiesPage.subPages.cityPage.to,
        element: (
            <ProtectedRoute>
                <AppCityItemTemplate />
            </ProtectedRoute>
        ),
    },
    {
        path: pagesConfig.appPage.subPages.countriesPage.to,
        element: (
            <ProtectedRoute>
                <AppCountryListTemplate />
            </ProtectedRoute>
        ),
    },
    {
        path: pagesConfig.appPage.subPages.formPage.to,
        element: (
            <ProtectedRoute>
                <AppFormTemplate />
            </ProtectedRoute>
        ),
    },
    { path: "*", element: <NotFoundPage /> },
];

export default AppRoutes;
