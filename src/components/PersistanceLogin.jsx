import { Outlet } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

function PersistanceLogin() {
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  const refresh = useRefreshToken();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    !auth?.accessToken ? verifyRefreshToken() : setLoading(false);
  }, []);
  useEffect(() => {
    console.log(auth?.accessToken);
    console.log(loading);
  }, [loading]);
  return <>{loading ? <p>Loading...</p> : <Outlet />}</>;
}

export default PersistanceLogin;
