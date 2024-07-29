import { createContext } from "react";
import { auth } from "../services/FirebaseConfig";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});

const authRef = auth;

export const Auth = ({children}) => {

    const [user, setUser] = useState(null);

    async function login(email, senha) {
        try {
            const response = await signInWithEmailAndPassword(authRef, email, senha);

            setUser(response.user);

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

    return (
        <AuthContext.Provider value={signUp}>
            {children}
        </AuthContext.Provider>
    );
};