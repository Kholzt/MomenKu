import NavbarDashboard from "./NavbarDashboard";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex justify-center w-full">
            {/* Sidebar */}
            {/* <Sidebar /> */}

            {/* Main Content */}
            <main className="bg-[--primary-light] min-h-screen w-full">
                <NavbarDashboard />
                <div className="p-4 w-[900px] mx-auto max-w-full">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
