import { Navigate } from "react-router-dom";
import Arte from "../components/Arte";
import HomeUsuario from "../components/HomeUsuario";
import PaginaArtista from "../components/PaginaArtista";
import AuthGuard from "../utils/AuthGuard";
import Livros from "../components/Livros";
import Casas from "../components/Casas";
import Perfil from "../pages/Perfil";

const PrivateRoutes = [
    {
        path: "/home/usuario",
        element: (
            <AuthGuard>
                <Navigate to="autores" replace />
             <HomeUsuario />,
            </AuthGuard>
        ),
        children: [
            {
                path: "autores",
                element: <Arte />       
            },
            {
                path: "autores/:nomeArtista",
                element: <PaginaArtista />       
            },
            {
                path: "historias",
                element: <PaginaArtista /> 
            },
            {
                path: "livros",
                element: <Livros /> 
            },
            {
                path: "casas",
                element: <Casas /> 
            },
           
        ],

       
    },

    {
        path: "/perfil",
        element: (
         
            <Perfil />
          
        ),
      },
];

export default PrivateRoutes;