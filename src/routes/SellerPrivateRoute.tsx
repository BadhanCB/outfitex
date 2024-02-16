import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Skeleton from "../components/shared/skeleton/Skeleton";

type Props = {
    children: React.ReactNode;
};

const SellerPrivateRoute = ({ children }: Props) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Skeleton />;
    }

    if (user.email && user.role === "seller") {
        return children;
    }

    //Navigate operation must be in the last
    return <Navigate to="/login" replace />;
};

export default SellerPrivateRoute;
