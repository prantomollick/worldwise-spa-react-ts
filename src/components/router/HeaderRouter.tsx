import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderRoutes from "../../routes/HeaderRoutes";

const HeaderRouter: React.FC = () => {
    return (
        <Routes>
            {HeaderRoutes.map((routeProps) => (
                <Route key={routeProps.path} {...routeProps}></Route>
            ))}
        </Routes>
    );
};

export default HeaderRouter;
