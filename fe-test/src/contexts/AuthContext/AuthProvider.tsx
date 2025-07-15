import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    return Boolean(localStorage.getItem("accessToken"));
  });

  useEffect(() => {
    if (!isSignedIn) {
      localStorage.removeItem("accessToken");
    }
  }, [isSignedIn]);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
