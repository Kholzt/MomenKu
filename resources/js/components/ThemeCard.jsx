import { Link } from "@inertiajs/react";
import React from "react";

const ThemeCard = ({ theme }) => {
    return (
        <article className="relative">
            <img
                src={"assets/image/example.png"}
                alt=""
                className="w-full aspect-[382/290]	 object-cover rounded-md	"
            />
            <span
                className={`px-2 py-1 absolute top-2 right-2 ${
                    theme.subscription_levels.level === 1
                        ? " bg-green-200 text-green-800"
                        : " bg-blue-200 text-blue-800"
                } rounded-md text-xs`}
            >
                {theme.subscription_levels.level == 1 ? "Free" : "Pro"}
            </span>
            <h3 className="text-xl mt-3 mb-1  group-hover:underline">
                {theme.name}
            </h3>
            <p className="text-sm">{theme.description}</p>

            <Link
                href={`/themes/${theme.slug}`}
                className=" text-white py-2 block text-center text-sm mt-4 bg-blue-500  rounded-md"
            >
                Preview
            </Link>
        </article>
    );
};

export default ThemeCard;
