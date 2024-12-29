import ApplicationLogo from "@/Components/ApplicationLogo";
import Button from "@/components/Button";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function SidebarDashboardMember(props) {
    return (
        <aside
            className={`transition-all duration-300 md:min-w-[270px] h-screen min-w-[70%] fixed ${
                props.sidebarOpen ? "left-0" : "-left-full"
            } md:sticky md:top-0 md:left-0 bg-white px-2 shadow-sm`}
        >
            <div className="flex justify-between">
                <div className="text-center h-16 w-16 ">
                    <ApplicationLogo />
                </div>
                <Button
                    onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
                    type="button"
                    variant="ghost"
                    className="border-none md:hidden"
                >
                    <i className="fa fa-close text-xl"></i>
                </Button>
            </div>
            <nav className="mt-10">
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link
                            className={`${
                                props.pathname == "/member/dashboard"
                                    ? "bg-[--primary-color] text-white"
                                    : "text-gray-900 hover:bg-[--primary-light]"
                            } px-4 py-2  block rounded-md backdrop-blur-sm`}
                            href="/member/dashboard"
                        >
                            <i className="w-7 fa fa-border-all me-2"></i>{" "}
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                props.pathname == "/member/mempelai"
                                    ? "bg-[--primary-color] text-white"
                                    : "text-gray-900 hover:bg-[--primary-light]"
                            } px-4 py-2  block rounded-md backdrop-blur-sm`}
                            href="/member/mempelai"
                        >
                            <i className="w-7 fa fa-user-group me-2"></i>{" "}
                            Mempelai
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                props.pathname == "/member/acara"
                                    ? "bg-[--primary-color] text-white"
                                    : "text-gray-900 hover:bg-[--primary-light]"
                            } px-4 py-2  block rounded-md backdrop-blur-sm`}
                            href="/member/acara"
                        >
                            <i className="w-7 fa-regular fa-calendar me-2"></i>{" "}
                            Acara
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                props.pathname == "/member/ucapan"
                                    ? "bg-[--primary-color] text-white"
                                    : "text-gray-900 hover:bg-[--primary-light]"
                            } px-4 py-2  block rounded-md backdrop-blur-sm`}
                            href="/member/ucapan"
                        >
                            <i className="w-7 fa-regular fa-comment me-2"></i>{" "}
                            Ucapan
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

function NavbarDashboardMember(props) {
    return (
        <nav className="border-b border-gray-100 bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <Button
                        onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
                        type="button"
                        variant="ghost"
                        className="border-none"
                    >
                        <i className="fa fa-bars"></i>
                    </Button>

                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none   "
                                        >
                                            {props.user.name}

                                            <i className="fa fa-chevron-down ms-2"></i>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                props.setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none  "
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !props.showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        props.showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (props.showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className=" border-gray-200 pb-1 pt-4 ">
                    <div className="px-4">
                        <div className="text-base font-medium text-gray-800 ">
                            {props.user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                            {props.user.email}
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route("profile.edit")}>
                            Profile
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const pathname = "/member/dashboard";
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <SidebarDashboardMember
                pathname={pathname}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            ></SidebarDashboardMember>
            <div className="w-full">
                <NavbarDashboardMember
                    user={user}
                    showingNavigationDropdown={showingNavigationDropdown}
                    setShowingNavigationDropdown={setShowingNavigationDropdown}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                ></NavbarDashboardMember>auth
                <main>{children}</main>
            </div>
        </div>
    );
}
