import { Link } from "@inertiajs/react";
import React from "react";

const HeroSection = () => {
    return (
        <div className="h-screen flex items-center  bg-white">
            <div className="md:max-w-7xl max-w-full mx-auto grid md:grid-cols-2 grid-cols-1 px-6">
                <div className="">
                    <h1 className="mb-6 text-5xl font-bold ">
                        Website undangan pernikahan online
                    </h1>
                    <p className="mb-5 text-base">
                        Undang orang-orang terdekat dalam momen kebahagiaan
                        pernikahan Anda dengan cara yang unik dan menarik. Coba
                        sekarang juga, GRATIS!
                    </p>
                    <div className="flex gap-2">
                        <Link
                            href="/register"
                            className="px-4 md:w-auto w-full text-center text-sm py-3 rounded-lg text-white bg-blue-400"
                        >
                            Buat Undangan
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
