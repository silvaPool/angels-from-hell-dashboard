import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthGuard({children}) {
    const {signed} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!signed) {
            navigate("/login");
        }
    }, [signed, navigate]);

    return children;
}

export default AuthGuard;