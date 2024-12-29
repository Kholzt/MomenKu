import React, { useState } from "react";
import ResponsiveNavLink from "@/components/ResponsiveNavLink";
import Dropdown from "@/components/Dropdown";
import { Link, usePage } from "@inertiajs/react";

const NavbarDashboard = () => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const user = usePage().props.auth.user;

    return (
        <nav className="border-b border-gray-100 bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 ">
                    <ul className="md:flex hidden items-center gap-6 ">
                        <li>
                            <Link className="text-sm" href={route("landing")}>
                                MOMENKU
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm" href={route("landing")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm" href={route("dashboard")}>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden ms-auto sm:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none   "
                                        >
                                            {user?.name}

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

                    <div className="-me-2 flex ms-auto items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
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
                                        !showingNavigationDropdown
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
                                        showingNavigationDropdown
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
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className=" border-gray-200 pb-1 pt-4 ">
                    <div className="px-4">
                        <div className="text-base font-medium text-gray-800 ">
                            {user?.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                            {user?.email}
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route("landing")}>
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route("dashboard")}>
                            Dashboard
                        </ResponsiveNavLink>
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
};

export default NavbarDashboard;
