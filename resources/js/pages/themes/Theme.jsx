import React from "react";
import Layout from "../layouts/Layout";
import ThemeSection from "./ThemeSection";
import { Head, useForm } from "@inertiajs/react";
import SearchSection from "./SearchSection";

const Theme = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>MomenKu | Tema</title>
                <meta
                    name="description"
                    content="Undangan digital kami menghadirkan pengalaman tanpa batas: desain cantik, RSVP otomatis, galeri foto, hingga peta lokasi acara. Hanya dalam hitungan menit, bagikan undangan Anda ke keluarga dan teman dengan mudah! "
                />
            </Head>
            <SearchSection data={data} />

            <ThemeSection type={data.type} themes={data.themes.data} />
        </Layout>
    );
};

export default Theme;
