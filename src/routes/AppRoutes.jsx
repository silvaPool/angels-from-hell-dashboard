import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OpenRoutes from "./OpenRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

function Routes() {
    
    const router = createBrowserRouter([...OpenRoutes, ...PrivateRoutes, ...AdminRoutes]);

    return (<RouterProvider router={router} />)
}

export default Routes;