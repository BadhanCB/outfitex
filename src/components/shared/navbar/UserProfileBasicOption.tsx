import { useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

const UserProfileBasicOption = () => {
    const [isShow, setIsShow] = useState(false);
    const { user, logout } = useAuth();
    document.documentElement.onclick = () => setIsShow(false);

    return (
        <div className="w-fit h-fit relative hidden md:block">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShow((prev) => !prev);
                }}
                className="m-0 align-middle relative tooltip"
                data-tooltip="Profile"
            >
                <FiUser className="text-2xl hover:text-amber-400 transition-colors" />
            </button>
            {isShow && (
                <div className="h-max w-max hidden md:block absolute -bottom-50 right-full bg-white shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] z-[1000] p-8 rounded-xl">
                    <h3 className="text-2xl font-medium">{user.name}</h3>
                    <p className="text-sm">{user.email}</p>
                    <Link
                        to={
                            user.role === "seller" ? "/inventory" : "/dashboard"
                        }
                        className="w-full flex items-center gap-2 hover:bg-slate-50 p-2 mt-1"
                    >
                        <IoIosSettings />
                        <span>Manage Account</span>
                    </Link>
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-2 hover:bg-slate-50 p-2"
                    >
                        <FiLogOut />
                        <span>Logout</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserProfileBasicOption;
