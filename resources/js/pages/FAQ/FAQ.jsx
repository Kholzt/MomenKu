import React from "react";
import FAQItem from "../../components/FAQItem";
import Layout from "../layouts/Layout";
import { Head } from "@inertiajs/react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const FAQ = ({ questions }) => {
    return (
        <Layout>
            <Head title="FAQ" />
            <Navbar />
            <section className="bg-[--primary-color]">
                <h1 className="text-3xl text-center text-white mx-auto font-bold  mb-4 w-[500px] max-w-full">
                    FAQ
                </h1>
                <p className="text-center text-white max-w-full w-[600px] mx-auto">
                    Kami telah mengumpulkan jawaban atas pertanyaan yang paling
                    sering diajukan agar Anda bisa mendapatkan informasi secara
                    instan.
                </p>
            </section>
            <section className="bg-[--primary-light]">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4">
                        {questions.map((question, index) => {
                            return (
                                <FAQItem
                                    key={index}
                                    question={question.question}
                                    answer={question.answer}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
};

export default FAQ;
