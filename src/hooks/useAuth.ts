import { useContext } from "react";
import { AUTH_CONTEXT } from "../contexts/contexts";

const useAuth = () => useContext(AUTH_CONTEXT);

export default useAuth;
