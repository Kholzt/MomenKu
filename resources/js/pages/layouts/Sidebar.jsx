// import { Link } from "@inertiajs/react";
// import React from "react";
// import { useGlobal } from "../../contexts/GlobalContext";

// const Sidebar = () => {
//     const currentPath = window.location.pathname;
//     const context = useGlobal();
//     const menus = [
//         {
//             href: "/admin/dashboard",
//             icon: "fa-table-columns",
//             label: "Dashboard",
//         },
//         { href: "/admin/products", icon: "fa-box", label: "Products" },
//         { href: "/admin/categories", icon: "fa-list", label: "Categories" },
//         { href: "/admin/users", icon: "fa-users", label: "Users" },
//         {
//             href: "/admin/analytics",
//             icon: "fa-chart-simple",
//             label: "Analytics",
//         },
//     ];
//     const isOpen = context.isNavbarOpen;
//     const toggle = () => {
//         context.toggleNavbar(!context.isNavbarOpen);
//     };
//     return (
//         <aside
//             className={`${
//                 isOpen
//                     ? "lg:w-[300px] lg:min-w-[300px] w-[100%] left-0"
//                     : "lg:w-[80px] left-[-100%]"
//             }  bg-[#023040] h-screen transition-all ease-in-out md:sticky absolute top-0 md:left-0  `}
//         >
//             {/* Logo Section */}
//             <div className="py-4 px-8 flex justify-between">
//                 <img
//                     src={`${isOpen ? "/logo.svg" : "/logo2.svg"}`}
//                     className="w-[50px]"
//                     alt="Logo"
//                 />
//                 <button onClick={toggle} className="md:hidden ">
//                     <i className="fa fa-close text-white"></i>
//                 </button>
//             </div>

//             {/* Menu Section */}
//             <ul className="px-4 flex flex-col gap-2">
//                 {menus.map((menu, index) => {
//                     const isActive = menu.href == currentPath;
//                     return (
//                         <li key={index}>
//                             <Link
//                                 href={menu.href}
//                                 className={` px-4 py-3 rounded-md ${
//                                     isActive
//                                         ? "bg-[#031a22] text-yellow-600"
//                                         : "hover:bg-[#164251] text-slate-300"
//                                 } block`}
//                             >
//                                 <i className={`fa ${menu.icon} me-3`}></i>{" "}
//                                 <span className={`${!isOpen && "hidden"}`}>
//                                     {" "}
//                                     {menu.label}
//                                 </span>
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </aside>
//     );
// };

// export default Sidebar;

import React from "react";

const Sidebar = () => {
    return <div>Sidebar</div>;
};

export default Sidebar;
