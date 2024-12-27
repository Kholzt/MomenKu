import React from "react";

const TestimonialCard = ({ message, name }) => {

    return (
        <article className="bg-white p-6 rounded-md">
            <p className="mb-2">{message}</p>
            <h6 className="font-bold">{name}</h6>
        </article>
    );
};

export default TestimonialCard;
