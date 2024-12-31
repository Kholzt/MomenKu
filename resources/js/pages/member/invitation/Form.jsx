import Layout from "@/pages/layouts/Layout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import PartnerSection from "./PartnerSection";
import EventSection from "./EventSection";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import OtherSection from "./OtherSection";

const Form = ({
    activeIndex: currentActiveIndex = 0,
    brides,
    events,
    themes,
    theme_id,
    idInvitation = null,
}) => {
    const [activeIndex, setActiveIndex] = useState(currentActiveIndex);
    const [show, setShow] = useState(false);
    useEffect(() => {
        const anchors = document.querySelectorAll("a");

        anchors.forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                setShow(true);
            });
        });

        return () =>
            anchors.forEach((anchor) => {
                anchor.removeEventListener("click", () => {});
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
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
                        <OtherSection
                            themes={themes}
                            themeId={theme_id}
                            idInvitation={idInvitation}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </div>
                </div>
            </div>

            <Modal
                maxWidth="lg"
                onClose={() => setShow(false)}
                show={show}
                closeable
            >
                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-2">
                            Pemberitahuan
                        </h1>
                        <h6 className="text-lg font-medium">
                            Apakah anda yakin menginggalkan halaman ?
                        </h6>
                        <p className="text-slate-600">
                            Tindakan ini akan menghapus data undangan anda
                        </p>
                    </div>
                    <div className="px-6 pb-6 flex gap-2 md:flex-row flex-col md:justify-end">
                        <Button
                            onClick={() => setShow(false)}
                            type="button"
                            variant="primary-outline"
                            className="text-[--primary-color]"
                        >
                            Batal
                        </Button>
                        <Button type="submit" variant="danger">
                            Oke
                        </Button>
                    </div>
                </form>
            </Modal>
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
