import { useState, createContext, useEffect } from "react";
import axios from "axios";
import React from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async (url, body) => {
    await axios
      .post(url, body)
      .then((res) => {
        setUser(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setError(err.response.data);
          setIsFetching(false);
        } else {
          setError("Login Faild! Please try again later!");
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isFetching,
        error,
        fetchData,
        setIsFetching,
        setError,
        refetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
