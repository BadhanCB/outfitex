import AccountDetails from "./AccountDetails";
import BasicInfo from "./BasicInfo";

const UserAccount = () => {
    return (
        <div className="p-6 flex flex-col md:flex-row gap-6">
            <BasicInfo />
            <AccountDetails />
        </div>
    );
};

export default UserAccount;
