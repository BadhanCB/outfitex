export const setTokenToCookie = (token: string) => {
    document.cookie = `token=${token}`;
};

export const getTokenFromCookie = () => {
    const token = document.cookie
        .split("; ")
        .find((ck) => ck.startsWith("token="))
        ?.split("=")[1];
    return token;
};

export const clearTokenCookie = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};
