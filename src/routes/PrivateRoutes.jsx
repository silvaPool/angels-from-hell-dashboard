import HomeUsuario from "../components/HomeUsuario";
import AuthGuard from "../utils/AuthGuard";

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