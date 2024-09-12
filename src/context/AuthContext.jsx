import { createContext, useEffect } from "react";
import { auth } from "../services/FirebaseConfig";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getProfile, updateProfile } from "../services/profile";

export const AuthContext = createContext({});

const authRef = auth;

export const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStorage = window.localStorage.getItem("@User");

    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    async function getProfileUser() {
      try {
        const res = await getProfile(user.uid);
        if (res) {
          setProfile(res);
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  async function login(email, senha) {
    try {
      const response = await signInWithEmailAndPassword(authRef, email, senha);

      setUser(response.user);
      localStorage.setItem("@AccessToken", response.user.accessToken);
      localStorage.setItem("@User", JSON.stringify(response.user));

      return { success: true, user: response.user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async function signUp(email, senha) {
    try {
      const response = await createUserWithEmailAndPassword(
        authRef,
        email,
        senha
      );

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


  async function updateProfileUser(data) {
    try {
      await updateProfile(data, user.uid);
      const res = await getProfile(user.uid);
      if (res) {
        setProfile(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        login,
        signUp,
        logout,
        loading,
        profile,
        updateProfileUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
