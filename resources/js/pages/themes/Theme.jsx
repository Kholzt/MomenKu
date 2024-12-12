import React from "react";
import Layout from "../layouts/Layout";
import ThemeSection from "./ThemeSection";
import { useForm } from "@inertiajs/react";

const Theme = ({ data }) => {
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
        <Layout>
            <section className="py-10">
                <div className="md:max-w-7xl max-w-full mx-auto">
                    <h1 className="text-center text-3xl mb-4 font-bold">
                        Temukan tema undangan terbaik versimu
                    </h1>
                    <p className="text-center md:max-w-lg  mx-auto">
                        Berikut ini adalah beberapa portofolio undangan online
                        digital terbaik yang telah dibuat menggunakan
                        datengdong!
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        action=""
                        className="flex justify-center  gap-2 mt-6"
                    >
                        <input
                            type="text"
                            className="px-4 py-2 rounded-md md:w-[600px] w-full"
                            name="key"
                            value={dataForm.key}
                            onChange={(e) => setData("key", e.target.value)}
                            id=""
                            placeholder="Cari Undangan"
                        />
                        <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                            Cari
                        </button>
                    </form>
                </div>
            </section>

            <section>
                <ThemeSection themes={data.themes} />
            </section>
        </Layout>
    );
};

export default Theme;
