import React from "react";
import HeroSection from "./HeroSection";
import ThemeSection from "./ThemeSection";
import Layout from "../layouts/Layout";
import { Head } from "@inertiajs/react";
import ShortDescriptionSection from "./ShortDescriptionSection";
import TestimonialSection from "./testimonialSection";
import FAQ from "./FAQ";
import Footer from "../layouts/Footer";

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
            <FAQ
                questions={[
                    {
                        question: "Apa itu aplikasi undangan online?",
                        answer: "Aplikasi undangan online adalah platform digital yang memungkinkan pengguna membuat, mengirim, dan mengelola undangan acara seperti pernikahan, ulang tahun, atau acara lainnya secara online. Undangan ini dapat diakses melalui tautan yang dapat dibagikan melalui media sosial atau pesan instan.",
                    },
                    {
                        question:
                            "Bagaimana cara membuat undangan di aplikasi ini?",
                        answer: "Daftar atau login ke akun Anda.Pilih template undangan sesuai acara.Isi detail acara seperti nama, tanggal, lokasi, dan deskripsi. Tambahkan foto atau video jika diperlukan. Simpan dan dapatkan tautan undangan Anda untuk dibagikan.",
                    },
                    {
                        question:
                            "Apakah undangan online ini bisa dikustomisasi?",
                        answer: "Ya, undangan dapat dikustomisasi sepenuhnya. Anda dapat mengubah warna, font, desain, menambahkan foto, video, dan detail acara sesuai kebutuhan.",
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
};

export default Landing;
