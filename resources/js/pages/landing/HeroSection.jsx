import React from "react";
import Button from "../../components/Button";
import SliderHeroSection from "./SliderHeroSection";
import { usePage } from "@inertiajs/react";

const HeroSection = () => {
    const user = usePage().props?.auth?.user;
    return (
        <section className="min-h-screen flex items-center bg-[--primary-color] text-white">
            <div className="container grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 px-6">
                <div className="md:text-start text-center md:order-1 order-2">
                    <h1 className="mb-4 text-5xl font-bold ">
                        Buat Undangan Online Anda Sendiri dengan Mudah!
                    </h1>
                    <p className="mb-5 text-base text-white/80">
                        Bagikan momen spesial Anda dengan cara modern dan hemat
                        waktu. Buat undangan yang berkesan hanya dengan beberapa
                        klik!
                    </p>
                    <div className="flex gap-2 md:justify-start justify-center">
                        <Button
                            type="link"
                            href={
                                user
                                    ? route("invitation.create")
                                    : route("register")
                            }
                            variant={"secondary"}
                        >
                            <i className="fa fa-plus-circle"></i> Buat Undangan
                        </Button>
                        <Button type="link" variant={"secondary-outline"}>
                            <i className="fa-regular fa-circle-play text-[--secondary-color]"></i>{" "}
                            Tutorial Undangan
                        </Button>
                    </div>
                </div>
                <div className="relative flex justify-center mt-14 md:mt-0 md:order-2 order-1">
                    {/* Wrapper untuk menumpuk card */}
                    <SliderHeroSection />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
