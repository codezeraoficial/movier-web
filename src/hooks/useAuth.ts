import { useContext } from "react";
import AuthContext from "../contexts/auth/auth";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
