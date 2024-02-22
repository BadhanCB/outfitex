import useAuth from "../../hooks/useAuth";
import placeholderPhoto from "../../assets/images/placeholder.svg";

const UserAccount = () => {
    const { user } = useAuth();
    const { _id, name, userName, email, phone, address, photo } = user;
    return (
        <div className="p-4">
            <div className="flex items-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                        src={
                            photo?.data && photo.type
                                ? `data:${photo?.type};base64 ${photo?.data}`
                                : placeholderPhoto
                        }
                        alt={name}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div>
                    <h3 className="text-3xl">{userName}</h3>
                    <h4 className="text-xl">
                        <span className="text-gray-400">Name:</span> {name}
                    </h4>
                    <p>
                        <span className="text-gray-400">Email:</span> {email}
                    </p>
                    <p>
                        <span className="text-gray-400">Phone:</span> {phone}
                    </p>
                    <p>
                        <span className="text-gray-400">Address:</span>{" "}
                        {address}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;
