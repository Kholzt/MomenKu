import React from "react";
import FAQItem from "../../components/FAQItem";

const FAQ = ({ questions }) => {
    return (
        <section className="bg-[--primary-light]">
            <div className="container">
                <h1 className="text-3xl text-center mx-auto font-bold  mb-4 w-[500px] max-w-full">
                    FAQ
                </h1>
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
    );
};

export default FAQ;
