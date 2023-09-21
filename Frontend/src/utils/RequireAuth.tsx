import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }:{children:string}) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};