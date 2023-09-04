import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      Profile - {auth && auth?.accessToken}
      <Link to="/user-details">Go Profile</Link>
    </div>
  );
}

export default Profile;
