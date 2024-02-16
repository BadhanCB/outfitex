import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Props = {
    children: React.ReactNode;
};

const UserPrivateRoute = ({ children }: Props) => {
    const { user } = useAuth();

    if (!user.email) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "user") {
        return <p>You are not a user. Become a user now!!!</p>;
    }
    return children;
};

export default UserPrivateRoute;
