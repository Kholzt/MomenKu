import { Link } from "@inertiajs/react";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[--primary-color]">
            <div className="container">
                <div className="flex justify-between flex-wrap gap-10">
                    <div className="w-[400px] max-w-full">
                        <h1 className="text-xl font-bold mb-2 text-white">
                            MomenKu
                        </h1>
                        <p className="text-slate-200 text-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis repudiandae perspiciatis molestiae
                            debitis deserunt possimus pariatur consequatur sit
                            laudantium ullam.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-10">
                        <div className="flex-1">
                            <h6 className="text-md font-medium text-white mb-2">
                                Navigasi
                            </h6>
                            <ul className="flex flex-col gap-2 ">
                                <li>
                                    <Link
                                        className="text-md text-slate-200 hover:text-white"
                                        href="/"
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-md text-slate-200 hover:text-white"
                                        href="/themes"
                                    >
                                        Tema
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-md text-slate-200 hover:text-white"
                                        href="/themes"
                                    >
                                        Portofolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-md text-slate-200 hover:text-white"
                                        href="/themes"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h6 className="text-md font-medium text-white mb-2">
                                Hubungi kami
                            </h6>
                            <ul className="flex  gap-2 ">
                                <li>
                                    <Link
                                        className="text-2xl text-slate-200 hover:text-white"
                                        href="/"
                                    >
                                        <div className="me-2 fa-brands fa-facebook"></div>{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-2xl text-slate-200 hover:text-white"
                                        href="/themes"
                                    >
                                        <div className="me-2 fa-brands fa-instagram"></div>{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-2xl text-slate-200 hover:text-white"
                                        href="/themes"
                                    >
                                        <i className="me-2 fa-brands fa-linkedin"></i>{" "}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-2xl text-slate-200 hover:text-white"
                                        href="/themes"
                                    >
                                        <i className="me-2 fa-brands fa-twitter"></i>{" "}
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-0 mt-4 text-slate-200">
                                <li>Muhammad Nor Kholit</li>
                                <li>mnorkholit7@gmail.com</li>
                                <li>+62 812-3838-2834</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
