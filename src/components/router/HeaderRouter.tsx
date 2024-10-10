import React from "react";
import { Route, Routes } from "react-router-dom";
import pagesConfig from "../../config/pages.config";
import AppRoutes from "../../routes/AppRoutes";
import HeaderRoutes from "../../routes/HeaderRoutes";

const HeaderRouter: React.FC = () => {
    return (
        <Routes>
            {HeaderRoutes.map((routeProps) => {
                return routeProps.path === pagesConfig.appPage.to ? (
                    <Route
                        key={routeProps.path}
                        path={routeProps.path}
                        element={routeProps.element}
                    >
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
