import Layout from "@/pages/layouts/Layout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import PartnerSection from "./PartnerSection";
import EventSection from "./EventSection";

const Form = ({
    activeIndex: currentActiveIndex = 0,
    brides,
    events,
    idInvitation = null,
}) => {
    const [activeIndex, setActiveIndex] = useState(currentActiveIndex);
    useEffect(() => {
        const handleLinkClick = (e) => {
            const target = e.target;
            if (target.tagName === "A") {
                e.preventDefault();
            }
        };

        // Menambahkan event listener global untuk klik pada semua anchor
        document.addEventListener("click", handleLinkClick);

        // Cleanup event listener saat komponen unmount
        return () => {
            document.removeEventListener("click", handleLinkClick);
        };
    }, []);

    return (
        <Layout>
            <Head title="Buat undangan" />
            <section className="bg-[--primary-color]">
                <h1 className="text-4xl text-white font-bold text-center">
                    Buat Undangan online dengan mudah
                </h1>
                <div className="container mt-10">
                    <StepsForm activeIndex={activeIndex}></StepsForm>
                </div>
            </section>

            <div className="container -mt-20 pb-20">
                <div className="bg-white  overflow-hidden shadow rounded-md">
                    <div
                        className={`flex transition-all   translate-x-[-${
                            activeIndex * 100
                        }%]`}
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                    >
                        <PartnerSection
                            brides={brides}
                            idInvitation={idInvitation}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                        <EventSection
                            events={events}
                            idInvitation={idInvitation}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Form;

function StepsForm({ activeIndex }) {
    return (
        <ul className="md:grid md:grid-cols-3 flex justify-center  gap-2 ">
            <li className="flex items-center justify-center">
                <span
                    className={`me-2 ${
                        activeIndex == 0
                            ? "text-[--primary-color] bg-white"
                            : "text-white"
                    } text-lg rounded-full border w-10 h-10  flex items-center justify-center`}
                >
                    1
                </span>
                <span
                    className={`text-white text-lg md:inline-block ${
                        activeIndex == 0 ? "inline-block" : "hidden"
                    }`}
                >
                    Mempelai
                </span>
            </li>
            <li className="flex items-center justify-center">
                <span
                    className={`me-2 ${
                        activeIndex == 1
                            ? "text-[--primary-color] bg-white"
                            : "text-white"
                    } text-lg rounded-full border w-10 h-10  flex items-center justify-center`}
                >
                    2
                </span>
                <span
                    className={`text-white text-lg md:inline-block ${
                        activeIndex == 1 ? "inline-block" : "hidden"
                    }`}
                >
                    Acara
                </span>
            </li>
            <li className="flex items-center justify-center">
                <span
                    className={`me-2 ${
                        activeIndex == 2
                            ? "text-[--primary-color] bg-white"
                            : "text-white"
                    } text-lg rounded-full border w-10 h-10  flex items-center justify-center`}
                >
                    3
                </span>
                <span
                    className={`text-white text-lg md:inline-block ${
                        activeIndex == 2 ? "inline-block" : "hidden"
                    }`}
                >
                    Lainnya
                </span>
            </li>
        </ul>
    );
}
