import React from "react";
import useToken from "../hooks/useToken";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

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
      <ProfilePage />
    </div>
  );
}

export default Auth;
