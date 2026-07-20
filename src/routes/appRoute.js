import { Routes, Route } from "react-router";
import Login from "../components/login/login.js";
import Register from "../components/register/register.js";
import Users from "../components/manageUser/Users.js";
import PrivateRoute from "./PrivateRoute.js";

const AppRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element="home" />
        <Route path="*" element="404" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<PrivateRoute component={Users} />} />
      </Routes>
    </>
  );
};

export default AppRoute;
