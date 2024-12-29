import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);
    const user = usePage().props.auth.user;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up the listener
    }, []);

    return (
        <>
            <NavbarWeb scrolled={scrolled} user={user} />
            <NavbarMobile
                scrolled={scrolled}
                active={active}
                setActive={setActive}
                user={user}
            />
        </>
    );
};

const NavbarMobile = ({ scrolled, active, setActive, user }) => {
    const baseClass =
        "fixed md:hidden z-10 transition-all duration-300 ease-in-out px-4";
    const scrolledClass = scrolled
        ? "py-4 bg-white/90 backdrop-blur-sm "
        : "py-12 ";
    const activeClass = active
        ? "top-2 left-2 bottom-2 right-2 rounded-lg h-screen bg-white/90 backdrop-blur-sm "
        : "top-0 left-0 w-full";

    return (
        <header
            className={`${baseClass} ${scrolledClass} ${activeClass} ${
                scrolled || active ? "text-black py-4" : "text-white"
            }`}
        >
            <div className="container flex flex-wrap justify-between">
                <Link className="text-sm" href={route("landing")}>
                    MOMENKU
                </Link>
                <button onClick={() => setActive(!active)}>
                    <i className="fa fa-bars"></i>
                </button>
                <nav className={`w-full pt-6 ${active ? "block" : "hidden"}`}>
                    <ul className="flex flex-col gap-6">
                        <li>
                            <Link className="text-sm" href={route("landing")}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm"
                                href={route("landing.themes")}
                            >
                                Tema
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm" href="/portofolio">
                                Portofolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm"
                                href={route("landing.faq")}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            {user ? (
                                <Button
                                    type="link"
                                    className="text-sm w-full block"
                                    href={route("dashboard")}
                                >
                                    <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                                    Dashboard
                                </Button>
                            ) : (
                                <Button
                                    type="link"
                                    className="text-sm w-full block"
                                    href={route("login")}
                                >
                                    <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                                    Login
                                </Button>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const NavbarWeb = ({ scrolled, user }) => {
    const baseClass =
        "fixed hidden md:block top-0 z-10 transition-all duration-300 ease-in-out px-4 w-full";
    const scrolledClass = scrolled
        ? "py-4 bg-white/90 backdrop-blur-sm text-black"
        : "py-12 text-white";

    return (
        <header className={`${baseClass} ${scrolledClass}`}>
            <div className="container flex justify-between">
                <Link className="text-sm" href={route("landing")}>
                    MOMENKU
                </Link>
                <nav>
                    <ul className="flex gap-10">
                        <li>
                            <Link className="text-sm" href={route("landing")}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm"
                                href={route("landing.themes")}
                            >
                                Tema
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm" href="/portofolio">
                                Portofolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-sm"
                                href={route("landing.faq")}
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
                {user ? (
                    <Link className="text-sm" href={route("dashboard")}>
                        <i className="fa-solid fa-home me-2"></i>
                        Dashboard
                    </Link>
                ) : (
                    <Link className="text-sm " href={route("login")}>
                        <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;
