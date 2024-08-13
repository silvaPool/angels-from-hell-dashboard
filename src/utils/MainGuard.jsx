import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function MainGuard({children}) {
    
    const {signed, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    return !loading ?
    (signed ? (<Navigate to={"/home/usuario"}/>) : (children)) : undefined;

}

export default MainGuard;