import React, { createContext, useState, useEffect } from "react";
import ProductsAPI from "./api/ProductsAPI";
// import PaymentsAPI from "./api/PaymentsApi";
import UserAPI from "./api/UserApi";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    const res = await axios.get(
      "https://burgershotserver.herokuapp.com/user/refresh_token"
    );
    setToken(res.data.accesstoken);
    console.log(res.data.accesstoken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken();
  }, []);
  const state = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    userAPI: UserAPI(token),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
