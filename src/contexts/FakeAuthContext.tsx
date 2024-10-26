import { createContext, FC, ReactNode, useReducer } from "react";
import { TUser } from "../types/users.type";
import { FAKE_USER } from "../mocks/db/users.db";

interface IAuthContextProps {
    user: null | TUser;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({
    user: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
} as IAuthContextProps);

enum ENActionTypes {
    USER_LOGIN = "user/login",
    USER_LOGOUT = "user/logout",
}

interface IInitialState {
    user: null | TUser;
    isAuthenticated: boolean;
}

type TActions =
    | { type: ENActionTypes.USER_LOGIN; payload: TUser }
    | { type: ENActionTypes.USER_LOGOUT };

const initialState = {
    user: null,
    isAuthenticated: false,
};

const reducer = (state: IInitialState, action: TActions) => {
    switch (action.type) {
        case ENActionTypes.USER_LOGIN:
            return { ...state, user: action.payload, isAuthenticated: true };

        case ENActionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };

        default:
            throw new Error("Unknown action");
    }
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [{ user, isAuthenticated }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const login = (email: string, password: string) => {
        // login logic here
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({ type: ENActionTypes.USER_LOGIN, payload: FAKE_USER });
        }
    };

    const logout = () => {
        dispatch({ type: ENActionTypes.USER_LOGOUT });
    };

    const ctxValue: IAuthContextProps = {
        user,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
    );
};
