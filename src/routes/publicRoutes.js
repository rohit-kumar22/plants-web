import { Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../pages/ForgetPassword";

const PublicRoutes = (
  <>
    <Route path="/" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/password-reset" element={<ForgetPassword />} />
  </>
);

export default PublicRoutes;
