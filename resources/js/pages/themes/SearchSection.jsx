import { useForm } from "@inertiajs/react";
import React from "react";
import Button from "../../components/Button";

const SearchSection = ({ data }) => {
    const {
        setData,
        get,
        data: dataForm,
    } = useForm({
        key: data.key ?? "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        get("");
    };
    return (
        <section className="pb-10 bg-[--primary-color]">
            <div className="container">
                <h1 className="text-center text-3xl mx-auto text-white  w-[700px] max-w-full mb-4 font-bold">
                    Jelajahi Dunia Baru dengan Beragam Tema Menarik – Temukan
                    Favorit Anda Sekarang!
                </h1>
                <p className="text-center md:max-w-lg text-white mx-auto">
                    Berikut ini adalah beberapa tema undangan online digital
                    terbaik yang ada pada MomenKhusus
                </p>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="flex justify-center bg-white p-2 rounded-md gap-2 mt-6"
                >
                    <input
                        type="text"
                        className="px-4 py-2 rounded-md  w-full border-0 focus:shadow-transparent focus:shadow-none"
                        name="key"
                        value={dataForm.key}
                        onChange={(e) => setData("key", e.target.value)}
                        placeholder="Cari Tema Undangan"
                    />

                    <Button
                        variant="primary"
                        className="md:px-8 px-6  rounded-md "
                        type="button"
                    >
                        Cari
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default SearchSection;
