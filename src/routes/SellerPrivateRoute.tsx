import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Props = {
    children: React.ReactNode;
};

const SellerPrivateRoute = ({ children }: Props) => {
    const { user } = useAuth();

    if (!user.email) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "seller") {
        return <p>You are not a seller. Become a seller now!!!</p>;
    }
    return children;
};

export default SellerPrivateRoute;
