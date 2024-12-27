import { Link } from "@inertiajs/react";
import React from "react";

const Button = ({
    type = "button",
    variant = "primary",
    children,
    ...props
}) => {
    let buttonClass = "px-4  text-center text-sm py-3 rounded-md  ";
    buttonClass += getVariant(variant);

    if (type === "link") {
        return (
            <Link {...props} className={`${buttonClass} ${props.className}`}>
                {children}
            </Link>
        );
    }
    return (
        <button {...props} className={`${buttonClass} ${props.className}`}>
            {children}
        </button>
    );
};

function getVariant(variant) {
    let classVal = "";

    switch (variant) {
        case "primary":
            classVal =
                "hover:shadow-[--primary-color]/50  bg-[--primary-color] text-white";
            break;
        case "secondary":
            classVal =
                "hover:shadow-[--secondary-color]/50  bg-[--secondary-color] text-white";
            break;
        case "primary-outline":
            classVal =
                "hover:shadow-[--primary-color]/50  border-[--primary-color] border text-white";
            break;
        case "secondary-outline":
            classVal =
                "hover:shadow-[--secondary-color]/50  border-[--secondary-color] border text-white";
            break;
        case "ghost":
            classVal =
                "hover:shadow-white  bg-white border-slate-400 border text-slate-900";
            break;
        default:
            classVal =
                "hover:shadow-[--primary-color]/50  bg-[--primary-color] text-white";
            break;
    }

    classVal += " ";
    return classVal;
}
export default Button;
