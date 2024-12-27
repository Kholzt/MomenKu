import { Link } from "@inertiajs/react";
import React from "react";
import { currencyFormat } from "../helpers/helpers";

const ThemeCard = ({ theme }) => {
    return (
        <article className="relative flex overflow-hidden flex-col h-full w-full rounded-xl bg-white">
            <img
                src={theme.thumbnail}
                alt=""
                className="w-full aspect-[382/290]	 object-cover	"
            />
            <span
                className={`px-2 py-1 absolute top-2 right-2 ${
                    theme.price == 0.0
                        ? " bg-green-200 text-green-800"
                        : " bg-blue-200 text-blue-800"
                } rounded-md text-xs`}
            >
                {theme.price == 0.0 ? "Free" : currencyFormat(theme.price)}
            </span>
            <div className="md:p-6 p-4">
                <h3 className="text-md  text-black font-medium mb-1  group-hover:underline">
                    {theme.name}
                </h3>
                <p className="text-sm text-slate-600">{theme.description}</p>
            </div>
        </article>
    );
};

export default ThemeCard;
