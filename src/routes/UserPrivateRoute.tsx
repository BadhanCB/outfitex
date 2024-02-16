import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Skeleton from "../components/shared/skeleton/Skeleton";

type Props = {
    children: React.ReactNode;
};

const UserPrivateRoute = ({ children }: Props) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Skeleton />;
    }

    if (user.email) {
        return children;
    }

    if (user.role !== "user") {
        return <p>You are not a user. Become a user now!!!</p>;
    }

    //Navigate operation must be in the last
    return <Navigate to="/login" replace />;
};

export default UserPrivateRoute;
