import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

const OpenRoutes = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    }
];

export default OpenRoutes;
