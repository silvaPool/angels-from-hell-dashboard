import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

const OpenRoutes = [
    {
        path: "/",
        element: <Login />,
        children: [
            {
                path: "/auth/cadastro",
                element: <Cadastro />,
            },
        ]
    }
];

export default OpenRoutes;
