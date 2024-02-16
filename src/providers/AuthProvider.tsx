import { useState } from "react";
import { AUTH_CONTEXT } from "../contexts/contexts";
import { UserType } from "../types";

type Props = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserType>({});

    return (
        <AUTH_CONTEXT.Provider value={{ user, setUser }}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;
