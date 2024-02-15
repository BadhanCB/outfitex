import { Link } from "react-router-dom";

const InventorySidebar = () => {
    return (
        <aside className="h-full w-full bg-gray-50 p-5">
            <ul>
                <li>
                    <Link to="/inventory">Overview</Link>
                </li>
                <li>
                    <Link to="/inventory/add-product">Add Product</Link>
                </li>
                <li>
                    <Link to="/inventory/manage-product">Manage Product</Link>
                </li>
            </ul>
        </aside>
    );
};

export default InventorySidebar;
