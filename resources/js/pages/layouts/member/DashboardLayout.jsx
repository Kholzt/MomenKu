import React from "react";
import Sidebar from "./Sidebar";
import NavbarDashboard from "./NavbarDashboard";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex w-full ">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-grow bg-gray-100">
                <NavbarDashboard />
                <div className="p-4">{children}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;
