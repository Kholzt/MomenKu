import Button from "@/components/Button";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const PartnerSection = ({
    setActiveIndex,
    activeIndex,
    idInvitation,
    brides,
}) => {
    const { data, setData, post, put, errors } = useForm({
        nama_lengkap_pria: brides[0]?.full_name ?? "",
        nama_panggilan_pria: brides[0]?.nickname ?? "",
        nama_ayah_pria: brides[0]?.father_name ?? "",
        nama_ibu_pria: brides[0]?.mother_name ?? "",
        nama_lengkap_wanita: brides[1]?.full_name ?? "",
        nama_panggilan_wanita: brides[1]?.nickname ?? "",
        nama_ayah_wanita: brides[1]?.father_name ?? "",
        nama_ibu_wanita: brides[1]?.mother_name ?? "",
    });
    const [isDirtyForm, setisDirtyForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isDirtyForm) {
            if (!idInvitation) {
                post("/new-invitation/brides", {
                    onSuccess: (e) => {
                        setActiveIndex(1);
                    },
                });
            } else {
                put("/new-invitation/brides/" + idInvitation, {
                    onSuccess: (e) => {
                        setActiveIndex(1);
                    },
                });
            }
        } else {
            setActiveIndex(1);
        }
    };

    const handleInputChange = (e) => {
        setisDirtyForm(true);
        setData(e.target.name, e.target.value);
    };

    return (
        <div className={`${activeIndex == 0 ? "" : "h-0"} min-w-full`}>
            <form onSubmit={handleSubmit}>
                <div className="p-6 border-b">
                    <h1 className="font-bold text-xl">Mempelai</h1>
                </div>
                <div className="grid md:grid-cols-2 mb-4 gap-6 p-6">
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            Mempelai Pria
                        </h3>

                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_lengkap_pria"
                                className="mb-2"
                            >
                                Nama Lengkap{" "}
                                <span className="text-red-500">*</span>
                            </InputLabel>
                            <TextInput
                                placeholder="Nama lengkap"
                                className="block w-full"
                                name="nama_lengkap_pria"
                                id="nama_lengkap_pria"
                                value={data.nama_lengkap_pria}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_lengkap_pria} />
                        </div>
                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_panggilan_pria"
                                className="mb-2"
                            >
                                Nama Panggilan{" "}
                                <span className="text-red-500">*</span>
                            </InputLabel>
                            <TextInput
                                placeholder="Nama panggilan"
                                className="block w-full"
                                name="nama_panggilan_pria"
                                id="nama_panggilan_pria"
                                value={data.nama_panggilan_pria}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_panggilan_pria} />
                        </div>
                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_ayah_pria"
                                className="mb-2"
                            >
                                Nama Ayah
                            </InputLabel>
                            <TextInput
                                placeholder="Nama ayah"
                                className="block w-full"
                                name="nama_ayah_pria"
                                id="nama_ayah_pria"
                                value={data.nama_ayah_pria}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_ayah_pria} />
                        </div>
                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_ibu_pria"
                                className="mb-2"
                            >
                                Nama Ibu
                            </InputLabel>
                            <TextInput
                                placeholder="Nama ibu"
                                className="block w-full"
                                name="nama_ibu_pria"
                                id="nama_ibu_pria"
                                value={data.nama_ibu_pria}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_ibu_pria} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            Mempelai Wanita
                        </h3>

                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_lengkap_wanita"
                                className="mb-2"
                            >
                                Nama Lengkap{" "}
                                <span className="text-red-500">*</span>
                            </InputLabel>
                            <TextInput
                                placeholder="Nama lengkap"
                                className="block w-full"
                                name="nama_lengkap_wanita"
                                id="nama_lengkap_wanita"
                                value={data.nama_lengkap_wanita}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_lengkap_wanita} />
                        </div>
                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_panggilan_wanita"
                                className="mb-2"
                            >
                                Nama Panggilan{" "}
                                <span className="text-red-500">*</span>
                            </InputLabel>
                            <TextInput
                                placeholder="Nama panggilan"
                                className="block w-full"
                                name="nama_panggilan_wanita"
                                id="nama_panggilan_wanita"
                                value={data.nama_panggilan_wanita}
                                onChange={handleInputChange}
                            />
                            <InputError
                                message={errors.nama_panggilan_wanita}
                            />
                        </div>
                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_ayah_wanita"
                                className="mb-2"
                            >
                                Nama Ayah
                            </InputLabel>
                            <TextInput
                                placeholder="Nama ayah"
                                className="block w-full"
                                name="nama_ayah_wanita"
                                id="nama_ayah_wanita"
                                value={data.nama_ayah_wanita}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_ayah_wanita} />
                        </div>
                        <div className="mb-3">
                            <InputLabel
                                htmlFor="nama_ibu_wanita"
                                className="mb-2"
                            >
                                Nama Ibu
                            </InputLabel>
                            <TextInput
                                placeholder="Nama ibu"
                                className="block w-full"
                                name="nama_ibu_wanita"
                                id="nama_ibu_wanita"
                                value={data.nama_ibu_wanita}
                                onChange={handleInputChange}
                            />
                            <InputError message={errors.nama_ibu_wanita} />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 p-6 bg-slate-50 border-t">
                    <Button
                        disabled
                        onClick={() => setActiveIndex(0)}
                        type="button"
                        variant="primary-outline"
                        className="text-[--primary-color] bg-slate-100"
                    >
                        <i className="fa fa-arrow-left"></i> Kembali
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        className="md:ms-auto"
                    >
                        Lanjut <i className="fa fa-arrow-right"></i>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PartnerSection;
