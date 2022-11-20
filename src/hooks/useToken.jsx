import React from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("accessToken");
    const useToken = JSON.parse(tokenString);
    return useToken?.token;
  };

  const [token, setToken] = React.useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("accessToken", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
