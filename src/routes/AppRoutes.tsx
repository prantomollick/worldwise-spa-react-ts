import { RouteProps } from "react-router-dom";
import { appPages } from "../config/pages.config";

import NotFoundPage from "../pages/NotFound.page";
import ProductPage from "../pages/product/Product.page";

const AppRoutes: RouteProps[] = [
    { path: appPages.citiesPage.to, element: <ProductPage /> },
    { path: appPages.countriesPage.to, element: <ProductPage /> },
    { path: "*", element: <NotFoundPage /> }
];

export default AppRoutes;
