import React from "react";
import HeroSection from "./HeroSection";
import ThemeSection from "./ThemeSection";
import Layout from "../layouts/Layout";

const Landing = ({ data }) => {

    return (
        <Layout>
            <HeroSection />
            <ThemeSection themes={data.themes} />
        </Layout>
    );
};

export default Landing;
