import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../api/authContext";

const ProtectedRoute = () => {
  const { isLoggedIn, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // sementara tunggu authContext cek localStorage
    return <div className="text-center p-6">Checking authentication...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/loginPage" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
