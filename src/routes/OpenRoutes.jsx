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
        children: [
            {
                path: "/cadastro",
                element: <Cadastro />
            },
        ]
    }
   
];

export default OpenRoutes;
