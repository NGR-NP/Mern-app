import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentRole, selectCurrentToken } from "./authSlice";
import NavLayout from "./NavLayout";

const RequireAuth = ({ isAllowed }) => {
  console.log("require auth rerender");
  const token = useSelector(selectCurrentToken);
  const role = useSelector(selectCurrentRole);
  const location = useLocation();

  return role?.find((roles) => isAllowed?.includes(roles)) ? (
    <NavLayout />
  ) : token ? (
    <Navigate to="/unauthorize" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
