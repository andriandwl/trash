import React from "react";
import useToken from "../hooks/useToken";
import LoginPage from "./LoginPage";
import Profile from "./Profile";

function Auth() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <main>
        <LoginPage setToken={setToken} />
      </main>
    );
  }
  return (
    <div>
      <Profile />
    </div>
  );
}

export default Auth;
