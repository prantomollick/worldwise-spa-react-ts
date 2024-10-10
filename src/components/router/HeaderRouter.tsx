import React from "react";
import { Route, Routes } from "react-router-dom";
import pagesConfig, { appPages } from "../../config/pages.config";
import HeaderRoutes from "../../routes/HeaderRoutes";
import AppRoutes from "../../routes/AppRoutes";

const HeaderRouter: React.FC = () => {
    return (
        <Routes>
            {HeaderRoutes.map((routeProps) => {
                console.log(
                    "RouteProps",
                    routeProps,
                    routeProps.path,
                    appPages.appPage?.to
                );

                return routeProps.path === pagesConfig.appPage.to ? (
                    <Route key={routeProps.path} element={routeProps.element}>
                        {AppRoutes.map((routeProps) => (
                            <Route key={routeProps.path} {...routeProps} />
                        ))}
                    </Route>
                ) : (
                    <Route key={routeProps.path} {...routeProps} />
                );
            })}
        </Routes>
    );
};

export default HeaderRouter;
