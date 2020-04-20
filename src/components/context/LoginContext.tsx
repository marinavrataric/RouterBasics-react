import { createContext } from "react";

export const LoginContext = createContext({
    user: {isLogin: false},
    setUser : (user: {isLogin: boolean}) => {}
})