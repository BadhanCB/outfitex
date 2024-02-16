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
