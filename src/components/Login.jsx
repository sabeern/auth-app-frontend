import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const inputRef = useRef();
  const { setAuth } = useContext(AuthContext);
  const submit = () => {};
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1 className="text-red-400 text-xl font-bold">Login</h1>
      <label>UserName</label>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        ref={inputRef}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Login;
