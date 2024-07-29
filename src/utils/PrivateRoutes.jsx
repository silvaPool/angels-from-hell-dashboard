import HomeUsuario from "../components/HomeUsuario";
import AuthGuard from "./AuthGuard";

const PrivateRoutes = [
    {
        path: "/home/usuario",
        element: (
            <AuthGuard>
             <HomeUsuario />,
            </AuthGuard>
        )
    }
]

export default PrivateRoutes;