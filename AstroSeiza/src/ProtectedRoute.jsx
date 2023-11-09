import { useAuth } from "./api/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRouteAdmin() {
  const { loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated);

  if (loading) return <h1>Cargando ...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRouteAdmin;