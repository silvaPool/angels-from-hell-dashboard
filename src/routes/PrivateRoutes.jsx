import { Navigate } from "react-router-dom";
import Arte from "../components/Arte";
import HomeUsuario from "../components/HomeUsuario";
import PaginaArtista from "../components/PaginaArtista";
import AuthGuard from "../utils/AuthGuard";

const PrivateRoutes = [
    {
        path: "/home/usuario",
        element: (
            <AuthGuard>
                {/* <Navigate to="autores" replace /> */}
             <HomeUsuario />,
            </AuthGuard>
        ),
        children: [
            {
                path: "autores",
                element: <Arte />       
            },
            {
                path: "historias",
                element: <PaginaArtista /> 
            },
        ],
    },
];

export default PrivateRoutes;