import { Link } from "@inertiajs/react";
import React from "react";
import Button from "../../components/Button";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center  bg-[--primary-color] text-white">
            <div className=" container  grid md:grid-cols-2 grid-cols-1 px-6">
                <div className="">
                    <h1 className="mb-4 text-5xl font-bold ">
                        Buat Undangan Online Anda Sendiri dengan Mudah!
                    </h1>
                    <p className="mb-5 text-base text-white/80">
                        Bagikan momen spesial Anda dengan cara modern dan hemat
                        waktu. Buat undangan yang berkesan hanya dengan beberapa
                        klik!
                    </p>
                    <div className="flex gap-2">
                        <Button type="link" variant={"secondary"}>
                            <i className="fa fa-plus-circle"></i> Buat Undangan
                        </Button>
                        <Button type="link" variant={"secondary-outline"}>
                            <i className="fa-regular fa-circle-play text-[--secondary-color]"></i>{" "}
                            Tutorial Undangan
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
