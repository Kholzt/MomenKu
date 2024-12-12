import { Link } from "@inertiajs/react";
import React from "react";
import ThemeCard from "../../components/ThemeCard";

const ThemeSection = ({ themes }) => {
    return (
        <div className=" md:py-10 py-6 flex items-center ">
            <div className="md:max-w-7xl max-w-full mx-auto px-6 ">
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
                </div>
            </div>
        </div>
    );
};

export default ThemeSection;
