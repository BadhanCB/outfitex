import { useEffect, useState } from "react";
import { AUTH_CONTEXT } from "../contexts/contexts";
import { CartItemType, UserType, WishListType } from "../types";
import {
    clearTokenCookie,
    getTokenFromCookie,
    setTokenToCookie,
} from "../lib/utils";
import toast from "react-hot-toast";
import { initializeFirebase } from "../firebase/firebase.config";

type Props = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserType>({});
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState<CartItemType[]>([]);
    const [wishlist, setWishList] = useState<WishListType[]>([]);

    useEffect(() => {
        initializeFirebase();
        if (getTokenFromCookie()) {
            setIsLoading(true);
            fetch("https://outfitex.onrender.com/authenticate-with-jwt", {
                headers: {
                    Authorization: `Bearer ${getTokenFromCookie()}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data.info);
                    setTokenToCookie(data.token);
                    setIsLoading(false);
                })
                .catch(() => {
                    toast.error("Failed to authenticate");
                    setIsLoading(false);
                });
        }
    }, []);

    const logout = () => {
        setUser({});
        clearTokenCookie();
    };

    return (
        <AUTH_CONTEXT.Provider
            value={{
                user,
                setUser,
                isLoading,
                setIsLoading,
                logout,
                cart,
                setCart,
                wishlist,
                setWishList,
            }}
        >
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;
