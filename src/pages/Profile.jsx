import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Profile() {
  const { auth } = useContext(AuthContext);
  return <div>Profile - {auth && auth?.accessToken}</div>;
}

export default Profile;
