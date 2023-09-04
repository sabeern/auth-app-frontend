import axios from "../api/axios";
import useAuth from "./useAuth";

function useRefreshToken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    try {
      const result = await axios.get("/token/refresh", {
        withCredentials: true,
      });
      console.log(result.data);
      setAuth((prev) => ({ ...prev, accessToken: result?.data?.accessToken }));
      return result?.data?.accessToken;
    } catch (err) {
      console.log(err);
    }
  };
  return refresh;
}

export default useRefreshToken;
