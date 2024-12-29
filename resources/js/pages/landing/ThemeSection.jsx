import { Link } from "@inertiajs/react";
import ThemeCard from "../../components/ThemeCard";

const ThemeSection = ({ themes }) => {
    return (
        <section className="min-h-screen  bg-[--primary-light] flex items-center ">
            <div className="container  px-6 ">
                <div className="text-center mb-10">
                    <h1 className="text-3xl mx-auto font-bold  mb-4 w-[500px] max-w-full">
                        Pilih Tema Undangan Sesuai Keinginan Anda
                    </h1>
                    <p className=" w-[894px] mx-auto max-w-full">
                        Dari desain klasik hingga modern, temukan tema yang
                        paling cocok untuk momen istimewa Anda. Semua tema dapat
                        disesuaikan untuk mencerminkan kepribadian dan cerita
                        cinta Anda.
                    </p>
                </div>
                <div className="">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-bold">
                            Tema Undangan Populer
                        </h3>
                        <Link href="/themes">
                            Lihat Semua <i className="fa fa-chevron-right"></i>
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6  grid-cols-1 ">
                        {themes.map((theme, i) => {
                            return (
                                <div key={i}>
                                    <Link href={`/themes/${theme.slug}`}>
                                        <ThemeCard theme={theme} key={i} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThemeSection;
