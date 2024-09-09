import { STORAGE } from "../constants/storage";
export const getItemStorage = (name) => {
    return localStorage.getItem(name) || "";
};
export const saveItemStorage = (name, parameter) => {
    if (typeof parameter === "string") {
        localStorage.setItem(name, parameter);
    }
    else {
        localStorage.setItem(name, JSON.stringify(parameter));
    }
};
export const getItemSessionStorage = (name) => {
    const data = sessionStorage.getItem(name) || "";
    if (data) {
        return JSON.parse(data);
    }
    return "";
};
export const saveItemSessionStorage = (name, parameter) => {
    if (typeof parameter === "string") {
        sessionStorage.setItem(name, parameter);
    }
    else {
        sessionStorage.setItem(name, JSON.stringify(parameter));
    }
};
export const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(window
        .atob(base64)
        .split("")
        .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(""));
    return JSON.parse(jsonPayload);
};
export const getUserInfo = () => {
    const userInfo = localStorage.getItem(STORAGE.USER_INFO);
    if (userInfo) {
        try {
            return JSON.parse(userInfo);
            // eslint-disable-next-line no-empty
        }
        catch (e) { }
    }
    return {};
};
