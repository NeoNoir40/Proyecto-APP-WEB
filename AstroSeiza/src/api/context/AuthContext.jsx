import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  loginRequestAdmin,
  verifyTokenRequestAdmin,
} from "../auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(false);


  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  const siginAdmin = async (admin) => {
    try {
      console.log(admin);
      const res = await loginRequestAdmin(admin);
      console.log(res.data);
      setIsAuthenticatedAdmin(true);
      setAdmin(res.data);
      console.log(admin);
    } catch (error) {
      console.log(error);
      const errorsToSet = Array.isArray(error.response.data)
        ? error.response.data
        : [error.response.data.message];

      setError(errorsToSet);
    }
  };

  useEffect(() => {
    async function checkLoginAdmin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticatedAdmin(false);
        setLoading(false);
        return setAdmin(null);
      }

      try {
        const res = await verifyTokenRequestAdmin(cookies.token);
        if (!res.data) {
          setIsAuthenticatedAdmin(false);
          setLoading(false);
          return;
        }

        setIsAuthenticatedAdmin(true);
        setAdmin(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticatedAdmin(false);
        setAdmin(null);
        setLoading(false);
      }
    }
    checkLoginAdmin();
  }, []);

  const sigin = async (user) => {
    try {
      console.log(user);
      const res = await loginRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
      console.log(user);
    } catch (error) {
      console.log(error);
      const errorsToSet = Array.isArray(error.response.data)
        ? error.response.data
        : [error.response.data.message];

      setError(errorsToSet);
    }
  };

  const singup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  //Sirve para admin y para user

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  const logoutAdmin = () => {
    Cookies.remove("token");
    setIsAuthenticatedAdmin(false);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        singup,
        user,
        isAuthenticated,
        error,
        sigin,
        loading,
        logout,
        logoutAdmin,
        admin,
        siginAdmin,
        isAuthenticatedAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
