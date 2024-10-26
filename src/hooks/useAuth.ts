import { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used within a AuthContextProvider Component"
        );
    }

    return context;
};
