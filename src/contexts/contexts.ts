import { Dispatch, SetStateAction, createContext } from "react";
import { UserType } from "../types";

interface IAUTH_Context {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
}

export const AUTH_CONTEXT = createContext<IAUTH_Context>({
    user: {},
    setUser: () => {},
});
