import { Dispatch, SetStateAction, createContext } from "react";
import { UserType } from "../types";

interface IAUTH_Context {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    logout: () => void;
}

export const AUTH_CONTEXT = createContext<IAUTH_Context>({
    user: {},
    setUser: () => {},
    isLoading: false,
    setIsLoading: () => {},
    logout: () => {},
});
