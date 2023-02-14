import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const appContext = createContext();

export function AppContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingInProgress, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [description, setDescription] = useState();
  const [sidebar, setSidebar] = useState(false);
  const [transactions, setTransactions] = useState({
    from: "",
    amount: "",
    accountName: "",
    destinationBank: "",
    accountNumber: "",
    description: "",
    pin: [],
  });

  useEffect(() => {
     const cookie = Cookies.get("token");
    if (cookie) {
      setIsAuthenticated(true);
      // let loggedIn = JSON.parse(localStorage.getItem("user"));
      //  setUser(loggedIn);
    } else {
      setIsAuthenticated(false);
    } 
  }, []);

  const handleShow = (what, color, info) => {
    setShow(true);
    setMessage(what);
    setVariant(color);
    info && setDescription(info);
    console.log(what);
  };
  const handleClose = () => setShow(false);

  return (
    <appContext.Provider
      value={{
        setIsAuthenticated,
        handleShow,
        handleClose,
        show,
        message,
        variant,
        loadingInProgress,
        setLoading,
        transactions,
        setTransactions,
        user,
        setUser,
        sidebar,
        setSidebar,
      }}>
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(appContext);
};
