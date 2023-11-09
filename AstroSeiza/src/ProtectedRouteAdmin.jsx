import { useAuth } from "./api/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
  const { loading, isAuthenticatedAdmin } = useAuth();
  console.log(  ` cargando ${loading} , autenticacion ${isAuthenticatedAdmin} `);

  if (loading) return <h1>Cargando ...</h1>;
  if (!isAuthenticatedAdmin && !loading) return <Navigate to="/loginAdmin" replace />;
  return <Outlet/>;
}

export default ProtectedRoute;