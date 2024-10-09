import { RouteProps } from "react-router-dom";
import { headerPages } from "../config/pages.config";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import HomePage from "../pages/HomePage";

const HeaderRoutes: RouteProps[] = [
    { path: "/", element: <HomePage /> },
    { path: headerPages.productPage.to, element: <Product /> },
    { path: headerPages.pricingPage.to, element: <Pricing /> }
];

export default HeaderRoutes;
