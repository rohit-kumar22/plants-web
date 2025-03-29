import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../pages/Layout";
import CartPage from "../pages/CartPage";

const PrivateRoutes = (
  <Route element={<ProtectedRoute />}>
    <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  </Route>
);

export default PrivateRoutes;
