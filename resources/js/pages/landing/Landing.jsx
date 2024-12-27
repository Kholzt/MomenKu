import React from "react";
import HeroSection from "./HeroSection";
import ThemeSection from "./ThemeSection";
import Layout from "../layouts/Layout";
import { Head } from "@inertiajs/react";
import ShortDescriptionSection from "./ShortDescriptionSection";
import TestimonialSection from "./testimonialSection";

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
            <TestimonialSection
                testimonials={[
                    {
                        message:
                            "Aplikasi ini sangat membantu saya untuk mengirimkan undangan pernikahan dengan cepat dan hemat biaya. Desainnya juga cantik dan mudah dikustomisasi. Sangat puas dengan hasilnya!",
                        name: "Andika Pratama",
                    },
                    {
                        message:
                            "Saya suka sekali dengan tema-tema yang tersedia di aplikasi ini. Undangannya terlihat profesional, dan semua tamu saya kagum dengan tampilannya. Luar biasa!",
                        name: "Siti Aulia",
                    },
                    {
                        message:
                            "Membuat undangan jadi jauh lebih mudah dengan aplikasi ini. Hemat waktu, hemat uang, dan tamu saya juga bilang sangat menarik. Sangat saya rekomendasikan!",
                        name: "Dimas Pratama",
                    },
                    {
                        message:
                            "Aplikasi ini sangat membantu saya untuk mengirimkan undangan pernikahan dengan cepat dan hemat biaya. Desainnya juga cantik dan mudah dikustomisasi. Sangat puas dengan hasilnya!",
                        name: "Andika Pratama",
                    },
                    {
                        message:
                            "Saya suka sekali dengan tema-tema yang tersedia di aplikasi ini. Undangannya terlihat profesional, dan semua tamu saya kagum dengan tampilannya. Luar biasa!",
                        name: "Siti Aulia",
                    },
                    {
                        message:
                            "Membuat undangan jadi jauh lebih mudah dengan aplikasi ini. Hemat waktu, hemat uang, dan tamu saya juga bilang sangat menarik. Sangat saya rekomendasikan!",
                        name: "Dimas Pratama",
                    },
                ]}
            />
        </Layout>
    );
};

export default Landing;
