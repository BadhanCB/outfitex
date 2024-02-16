import { useEffect, useState } from "react";
import { AUTH_CONTEXT } from "../contexts/contexts";
import { UserType } from "../types";
import { getTokenFromCookie, setTokenToCookie } from "../lib/utils";
import toast from "react-hot-toast";

type Props = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserType>({});

    useEffect(() => {
        if (getTokenFromCookie()) {
            fetch("http://localhost:5379/authenticate-with-jwt", {
                headers: {
                    Authorization: `Bearer ${getTokenFromCookie()}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data.info);
                    setTokenToCookie(data.token);
                })
                .catch(() => {
                    toast.error("Failed to authenticate");
                });
        }
    }, []);

    return (
        <AUTH_CONTEXT.Provider value={{ user, setUser }}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;
