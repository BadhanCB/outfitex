import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MainSkeleton from "../components/shared/skeletons/MainSkeleton";

type Props = {
    children: React.ReactNode;
};

const UserPrivateRoute = ({ children }: Props) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <MainSkeleton />;
    }

    if (user.email && user.role === "user") {
        return children;
    }

    //Navigate operation must be in the last
    return <Navigate to="/login" replace />;
};

export default UserPrivateRoute;
