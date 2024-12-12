import { Link } from "@inertiajs/react";
import React from "react";
import ThemeCard from "../../components/ThemeCard";

const ThemeSection = ({ themes }) => {
    return (
        <div className="min-h-screen md:py-10 py-6 bg-slate-50 flex items-center ">
            <div className="md:max-w-7xl max-w-full mx-auto px-6 ">
                <div className="text-center">
                    <h1 className="text-3xl mx-auto  mb-6 w-[500px] max-w-full">
                        Pilih tema undangan sesuai yang kamu inginkan
                    </h1>
                </div>
                <div className="">
                    <div className="grid md:grid-cols-4  grid-cols-1 ">
                        {themes.map((theme, i) => {
                            return (
                                <div key={i} className="md:p-7 p-3">
                                    <ThemeCard theme={theme} key={i} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-6">
                        <Link
                            href="/themes"
                            className="px-4 md:w-auto w-full text-center text-sm py-3 rounded-lg text-white bg-blue-400"
                        >
                            Selengkapnya <i className="fa fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSection;
