import React from "react";
import HeroSection from "./HeroSection";
import ThemeSection from "./ThemeSection";
import Layout from "../layouts/Layout";
import { Head } from "@inertiajs/react";
import ShortDescriptionSection from "./ShortDescriptionSection";

const Landing = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>MomenKu</title>
                <meta
                    name="description"
                    content="Undangan digital kami menghadirkan pengalaman tanpa batas: desain cantik, RSVP otomatis, galeri foto, hingga peta lokasi acara. Hanya dalam hitungan menit, bagikan undangan Anda ke keluarga dan teman dengan mudah! "
                />
            </Head>
            <HeroSection />
            <ShortDescriptionSection />
            <ThemeSection themes={data.themes} />
        </Layout>
    );
};

export default Landing;
