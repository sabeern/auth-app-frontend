import axios from "../api/axios";
import useAuth from "./useAuth";

function useLogout() {
  const { setAuth } = useAuth();
  const signout = async () => {
    try {
      await axios.get("/user/logout", { withCredentials: true });
      setAuth({});
    } catch (err) {
      console.log("error");
    }
  };
  return signout;
}

export default useLogout;
