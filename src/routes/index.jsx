import { BrowserRouter, Routes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes}
        {PrivateRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
