import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OpenRoutes from "./OpenRoutes";
import PrivateRoutes from "./PrivateRoutes";

function Routes() {
    
    const router = createBrowserRouter([...OpenRoutes, ...PrivateRoutes]);

    return (<RouterProvider router={router} />)
}

export default Routes;