import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = () => {
    return (
        <header className="px-4 py-6">
            <div className="md:max-w-7xl max-w-full mx-auto  flex ">
                <Link href="/">Logo</Link>
                <nav className="ms-auto">
                    <ul className="flex gap-10">
                        <li>
                            <Link href="/">Beranda</Link>
                        </li>
                        <li>
                            <Link href="/themes">Tema</Link>
                        </li>
                        <li>
                            <Link href="/themes">Portofolio</Link>
                        </li>
                        <li>
                            <Link href="/themes">Tutorial</Link>
                        </li>
                        <li>
                            <Link href="/themes">Harga</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
