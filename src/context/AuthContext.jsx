import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    logIn,
    logOut,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}

export default AuthProvider;
