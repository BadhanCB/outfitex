import { Dispatch, SetStateAction, createContext } from "react";
import { CartItemType, UserType, WishListType } from "../types";

interface IAUTH_Context {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    logout: () => void;
    cart: CartItemType[];
    setCart: Dispatch<SetStateAction<CartItemType[]>>;
    wishlist: WishListType[];
    setWishList: Dispatch<SetStateAction<WishListType[]>>;
    reAuthenticate: () => void;
}

export const AUTH_CONTEXT = createContext<IAUTH_Context>({
    user: {},
    setUser: () => {},
    isLoading: false,
    setIsLoading: () => {},
    logout: () => {},
    cart: [],
    setCart: () => {},
    wishlist: [],
    setWishList: () => {},
    reAuthenticate: () => {},
});
