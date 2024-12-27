import { Link } from "@inertiajs/react";
import React from "react";
import ThemeCard from "../../components/ThemeCard";
import Button from "../../components/Button";

const ThemeSection = ({ themes, type, pagination }) => {
    const filterItems = [
        {
            name: "Semua Tema",
            key: null,
        },
        {
            name: "Gratis",
            key: "free",
        },
        {
            name: "Berbayar",
            key: "pro",
        },
    ];
    return (
        <section className="pt-6  flex items-center bg-[--primary-light]">
            <div className="container">
                <ul className="flex   mb-10">
                    {filterItems?.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link
                                    href={`${
                                        item.key != null
                                            ? "?type=" + item.key
                                            : "/themes"
                                    }`}
                                    className={`flex flex-col gap-2  text-center py-6 px-6 border-b-4  hover:border-[--primary-color] hover:text-[--primary-color] ${
                                        type == item.key
                                            ? "border-[--primary-color] text-[--primary-color] "
                                            : "text-slate-400  border-transparent "
                                    }`}
                                    type="link"
                                    variant="ghost"
                                >
                                    <i className="fa fa-bolt text-4xl"></i>
                                    <small>{item.name}</small>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6  grid-cols-1 ">
                        {themes.map((theme, i) => {
                            return (
                                <div key={i}>
                                    <Link href={`/themes/${theme.slug}`}>
                                        <ThemeCard theme={theme} key={i} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-2 mt-6 justify-center">
                        {pagination.map((paginate, index) => {
                            return (
                                <Button
                                    variant={
                                        paginate.active ? "primary" : "ghost"
                                    }
                                    className={`${
                                        paginate.url == null
                                            ? "pointer-events-none"
                                            : ""
                                    }`}
                                    key={index}
                                    type="link"
                                    href={paginate.url}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: paginate.label,
                                        }}
                                    ></div>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThemeSection;
