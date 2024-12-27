import React, { useState, useEffect } from "react";
import ThemeCard from "../../components/ThemeCard";

const SliderHeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const themes = [
        {
            name: "Test 1",
            description: "Test Description",
            price: "0",
            thumbnail: "https://demo.datengdong.com/themes/one/thumb.png",
        },
        {
            name: "Test 2",
            description: "Test Description",
            price: "0",
            thumbnail: "https://demo.datengdong.com/themes/two/thumb.png",
        },
        {
            name: "Test 3",
            description: "Test Description",
            price: "0",
            thumbnail: "https://demo.datengdong.com/themes/three/thumb.png",
        },
    ];

    // Auto-slider functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [themes.length]);

    return (
        <div className="relative w-full md:h-auto h-80">
            <div className="relative flex w-full">
                {themes.map((theme, index) => (
                    <div
                        key={index}
                        className={`absolute -top-10 left-1/2 transform transition-all duration-1000 ease-in-out  ${
                            index === currentIndex
                                ? "-translate-x-1/2 z-[2] scale-y-110 opacity-100"
                                : index === (currentIndex + 1) % themes.length
                                ? " z-[1]  opacity-80"
                                : "-translate-x-full z-[1] opacity-80"
                        }`}
                    >
                        <ThemeCard theme={theme} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderHeroSection;
