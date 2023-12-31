import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import UserController from "./pages/UserController";
import PersistanceLogin from "./components/PersistanceLogin";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route element={<PersistanceLogin />}>
              <Route path="/" element={<RequireAuth />}>
                <Route path="profile" element={<Profile />} />
                <Route path="user-details" element={<UserController />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
