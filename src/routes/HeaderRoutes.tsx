import { RouteProps } from "react-router-dom";
import pagesConfig from "../config/pages.config";

import HomePage from "../pages/home/Home.page";
import NotFoundPage from "../pages/NotFound.page";
import ProductPage from "../pages/product/Product.page";
import PricePage from "../pages/pricing/Pricing.page";
import LoginPage from "../pages/login/Login.page";

const HeaderRoutes: RouteProps[] = [
    { path: "/", element: <HomePage /> },
    { path: pagesConfig.productPage.to, element: <ProductPage /> },
    { path: pagesConfig.pricingPage.to, element: <PricePage /> },
    { path: pagesConfig.pricingPage.to, element: <PricePage /> },
    { path: pagesConfig.loginPage.to, element: <LoginPage /> },
    { path: "*", element: <NotFoundPage /> }
];

export default HeaderRoutes;
