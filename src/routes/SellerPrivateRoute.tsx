import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MainSkeleton from "../components/shared/skeletons/MainSkeleton";

type Props = {
    children: React.ReactNode;
};

const SellerPrivateRoute = ({ children }: Props) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <MainSkeleton />;
    }

    if (user.email && user.role === "seller") {
        return children;
    }

    //Navigate operation must be in the last
    return <Navigate to="/login" replace />;
};

export default SellerPrivateRoute;
