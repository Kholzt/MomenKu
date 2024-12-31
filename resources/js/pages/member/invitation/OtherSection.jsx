import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const OtherSection = ({
    setActiveIndex,
    activeIndex,
    idInvitation,
    themeId,
    themes = [],
}) => {
    const { data, setData, post, put, errors, processing } = useForm({
        theme: "",
    });
    const [isDirtyForm, setisDirtyForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("invitation.updateOther", idInvitation), {
            onSuccess: (e) => {
                setActiveIndex(3);
            },
        });
    };

    const handleInputChange = (e) => {
        setisDirtyForm(true);
        setData(e.target.name, e.target.value);
    };

    return (
        <div className={`${activeIndex == 2 ? "" : "h-0"} min-w-full`}>
            <form onSubmit={handleSubmit}>
                <div className="p-6 border-b">
                    <h1 className="font-bold text-xl">Lainnya</h1>
                </div>
                <Themes
                    themeId={themeId}
                    setData={setData}
                    data={data}
                    themes={themes}
                />
                <div className="flex md:flex-row flex-col gap-4 p-6 bg-slate-50 border-t">
                    <Button
                        onClick={() => setActiveIndex(1)}
                        type="button"
                        variant="primary-outline"
                        className="text-[--primary-color]"
                    >
                        <i className="fa fa-arrow-left"></i> Kembali
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={processing}
                        className={`md:ms-auto ${processing && "opacity-50"}`}
                    >
                        {processing ? (
                            "Loading..."
                        ) : (
                            <>
                                Lanjut
                                <i className="fa fa-arrow-right"></i>
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default OtherSection;

const Themes = ({ themes, setData, data, themeId }) => {
    const [open, setOpen] = useState(false);
    return (
        <article className="bg-white overflow-hidden p-6 rounded-lg  transition-all  ease-in-out duration-300  cursor-pointer">
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center "
            >
                <h4 className="font-medium text-lg">Tema Undangan</h4>
                <i
                    className={`fa transition-all fa-chevron-down ease-in-out duration-300 ${
                        open ? "rotate-[180deg]" : "rotate-0"
                    }`}
                ></i>
            </div>
            <div
                className={`transition-all  ease-linear duration-300  ${
                    open ? "h-auto  opacity-100 mt-4" : "max-h-0 opacity-0 "
                }`}
            >
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                    {themes.map((theme, index) => {
                        return (
                            <label
                                key={index}
                                className="overflow-hidden relative rounded-md"
                            >
                                <input
                                    onChange={() => setData("theme", theme.id)}
                                    value={theme.id}
                                    checked={themeId === theme.id}
                                    type="radio"
                                    name="theme"
                                    className="top-3 left-3 absolute"
                                />
                                <img src={theme.thumbnail} alt="" />
                            </label>
                        );
                    })}
                </div>
            </div>
        </article>
    );
};
