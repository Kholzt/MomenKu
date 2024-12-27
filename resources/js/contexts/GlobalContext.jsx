import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const GlobalContext = createContext();

// Provide the context to child components
export const GlobalProvider = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // Function to toggle the navbar
    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev);
    };

    // Set default state based on screen size
    useEffect(() => {
        const handleResize = () => {
            // Set to true for desktop sizes (>=1024px), false otherwise
            setIsNavbarOpen(window.innerWidth >= 1024);
        };

        // Initial check
        handleResize();

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <GlobalContext.Provider value={{ isNavbarOpen, toggleNavbar }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for using the context
export const useGlobal = () => useContext(GlobalContext);
