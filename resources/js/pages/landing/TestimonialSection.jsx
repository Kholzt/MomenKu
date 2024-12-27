import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

const TestimonialSection = ({ testimonials }) => {
    return (
        <section className="bg-[--primary-color] ">
            <div className="container">
                <h1 className="text-3xl mx-auto text-center  text-white font-bold  mb-6 w-[500px] max-w-full">
                    Apa yang pengguna katakan tentang MomenKu
                </h1>
                {/* Wrapper dengan scroll horizontal dan snap */}
                <div className="overflow-x-auto rounded-md scrollbar-hide scroll-snap-x mandatory snap-x snap-mandatory">
                    <div className="flex gap-4">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className="snap-start lg:w-[calc(97%/3)] md:w-[calc(100%/2)] w-[calc(100%/1)] shrink-0"
                            >
                                <TestimonialCard
                                    message={testimonial.message}
                                    name={testimonial.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
