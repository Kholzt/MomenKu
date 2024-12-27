import React from "react";
import { useGlobal } from "../../../contexts/GlobalContext";

const NavbarDashboard = () => {
    const context = useGlobal();
    const toggle = () => {
        context.toggleNavbar(!context.isNavbarOpen);
    };
    return (
        <nav className="bg-white shadow-sm w-full px-4 py-4">
            <button onClick={toggle}>
                <i className="fa fa-bars"></i>
            </button>
        </nav>
    );
};

export default NavbarDashboard;
