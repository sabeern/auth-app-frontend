import React, { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";

function UserController() {
  const [isMounted, setIsMounted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState();
  const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useLogout();
  useEffect(() => {
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const result = await axiosPrivate.get("/user/get-users", {
          withCredentials: true,
          signal: controller.signal,
        });
        isMounted && setUsers(result.data);
      } catch (err) {
        navigate("/");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
    // return () => {
    //   setIsMounted(false);
    //   controller.abort();
    // };
  }, []);
  const signout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <div>
      <h1>User Details</h1>
      {users?.length && (
        <ul>
          {users.map((user, index) => {
            return <li key={index}>{user.userName}</li>;
          })}
        </ul>
      )}
      <button onClick={signout}>Logout</button>
    </div>
  );
}

export default UserController;
