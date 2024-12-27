import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <article
            onClick={() => setOpen(!open)}
            className="bg-white overflow-hidden p-6 rounded-lg border transition-all  ease-in-out duration-300  cursor-pointer"
        >
            <div className="flex justify-between items-center">
                <h4 className="font-medium text-lg">{question}</h4>
                <i
                    className={`fa transition-all fa-chevron-down ease-in-out duration-300 ${
                        open ? "rotate-[180deg]" : "rotate-0"
                    }`}
                ></i>
            </div>
            <p
                className={`transition-all  ease-linear duration-300  ${
                    open ? "h-auto  opacity-100 " : "max-h-0 opacity-0 "
                }`}
            >
                {answer}
            </p>
        </article>
    );
};

export default FAQItem;
