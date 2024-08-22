import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const { signed, loading, user } = useContext(AuthContext);

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (!signed) {
  //   return <Navigate to="/" replace />;
  // }

  // if (user.email === "admin@admin.com") {
  //   return <Navigate to="/admin/home" replace />;
  // }

  // return children;

  return !loading ? (
    !signed ? (
      <Navigate to={"/"} />
    ) : user.email === "admin@admin.com" ? (
      <Navigate to={"/admin/home"} />
    ) : (
      children
    )
  ) : undefined;
}

export default AuthGuard;
