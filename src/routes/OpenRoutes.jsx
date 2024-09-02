import { Navigate } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import MainGuard from "../utils/MainGuard";

const OpenRoutes = [
  {
    path: "/",
    element: (
      <MainGuard>
        <Login />
      </MainGuard>
    ),
  },
  {
    path: "/cadastro",
    element: (
      <MainGuard>
        <Cadastro />
      </MainGuard>
    ),
  },
];

export default OpenRoutes;
