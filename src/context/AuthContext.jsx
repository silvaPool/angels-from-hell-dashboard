import { createContext, useEffect } from "react";
import { auth } from "../services/FirebaseConfig";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});

const authRef = auth;

export const Auth = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userStorage = window.localStorage.getItem("@User");

        if (userStorage) {
            setUser(JSON.parse(userStorage));
        } else {
            setUser(null);
        }
    }, []);

    async function login(email, senha) {
        try {
            const response = await signInWithEmailAndPassword(authRef, email, senha);

            setUser(response.user);
            localStorage.setItem("@AccessToken", response.user.accessToken);
            localStorage.setItem("@User", JSON.stringify(response.user));

            console.log(response);

            return true;

        } catch (error) {
            return error.message;
        }
    }


    async function signUp(email, senha) {
        try {
            const response = await createUserWithEmailAndPassword(authRef, email, senha);

            return response;

        } catch (error) {
            return error.message;
        }
    }

    function logout() {
        
        localStorage.removeItem("@AccessToken");
        localStorage.removeItem("@User");

        setUser(null);
    }

    return (
        <AuthContext.Provider value={{login, signUp, logout}}>
            {children}
        </AuthContext.Provider>
    );
};