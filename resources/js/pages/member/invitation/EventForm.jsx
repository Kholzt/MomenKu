import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import { Switch } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const EventForm = ({
    idInvitation,
    event,
    setEvent,
    show = false,
    setShow,
}) => {
    const [enabled, setEnabled] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        tanggal: new Date().toISOString().split("T")[0],
        jam_mulai: "09:00",
        jam_selesai: "12:00",
        jam_sampai_selesai: false,
        alamat: "",
        acara_utama: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("invitation.storeEvent", idInvitation), {
            onSuccess: () => setShow(false),
        });
    };

    useEffect(() => {
        if (event) {
            reset();
            setData({
                judul: event?.event_name,
                tanggal: event?.event_date,
                jam_mulai: event?.start_time,
                jam_selesai: event?.end_time,
                jam_sampai_selesai: event ? !event.end_time : false,
                alamat: event?.address,
                acara_utama: event?.is_primary,
            });
        }
    }, [event]);

    return (
        <div className="flex items-center">
            <h1 className=" font-bold text-xl">Acara</h1>
            <Button
                onClick={() => {
                    setEvent({});
                    reset();
                    setShow(true);
                }}
                type="button"
                variant="primary"
                className="ms-auto"
            >
                Tambah
            </Button>
            <Modal show={show} closeable onClose={() => setShow(false)}>
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 mb-4 gap-6 p-6">
                        <div className="md:col-span-1 col-span-2">
                            <InputLabel htmlFor="judul" className=" mb-2">
                                Judul
                            </InputLabel>
                            <TextInput
                                type="text"
                                placeholder="Resepsi"
                                className="block w-full"
                                name="judul"
                                id="judul"
                                value={data.judul}
                                onChange={(e) =>
                                    setData("judul", e.target.value)
                                }
                            />
                            <InputError message={errors.judul} />
                        </div>

                        <div className="md:col-span-1 col-span-2">
                            <InputLabel htmlFor="tanggal" className=" mb-2">
                                Tanggal
                            </InputLabel>
                            <TextInput
                                type="date"
                                className="block w-full"
                                name="tanggal"
                                id="tanggal"
                                value={data.tanggal}
                                onChange={(e) =>
                                    setData("tanggal", e.target.value)
                                }
                            />
                            <InputError message={errors.tanggal} />
                        </div>

                        <div className="md:col-span-1 col-span-2">
                            <InputLabel htmlFor="jam_mulai" className=" mb-2">
                                Jam Mulai
                            </InputLabel>
                            <TextInput
                                type="time"
                                className="block w-full"
                                name="jam_mulai"
                                id="jam_mulai"
                                value={data.jam_mulai}
                                onChange={(e) =>
                                    setData("jam_mulai", e.target.value)
                                }
                            />
                            <InputError message={errors.jam_mulai} />
                        </div>

                        <div className="md:col-span-1 col-span-2">
                            <InputLabel htmlFor="jam_selesai" className=" mb-2">
                                Jam Selesai
                            </InputLabel>
                            <TextInput
                                type="time"
                                className="block w-full"
                                name="jam_selesai"
                                id="jam_selesai"
                                value={data.jam_selesai}
                                onChange={(e) =>
                                    setData("jam_selesai", e.target.value)
                                }
                                disabled={data.jam_sampai_selesai}
                            />
                            <InputError message={errors.jam_selesai} />

                            <label className="mt-2 inline-block select-none">
                                <Checkbox
                                    name="jam_sampai_selesai"
                                    className="me-2"
                                    checked={data.jam_sampai_selesai}
                                    onChange={(e) =>
                                        setData(
                                            "jam_sampai_selesai",
                                            e.target.checked
                                        )
                                    }
                                />
                                Sampai selesai
                            </label>
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="alamat" className=" mb-2">
                                Alamat
                            </InputLabel>
                            <textarea
                                name="alamat"
                                rows={4}
                                className="rounded-md border-gray-300 shadow-sm focus:border-[--primary-color] focus:ring-[--primary-color] w-full resize-none"
                                id="alamat"
                                placeholder="Jl. Pakisan , Kab Bondowoso, Kec Tenggarang, Desa Bataan"
                                value={data.alamat}
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                            ></textarea>
                            <InputError message={errors.alamat} />
                        </div>

                        <div className="col-span-2 flex justify-between">
                            <div className="flex flex-col">
                                <InputLabel
                                    htmlFor="acara_utama"
                                    className="inline"
                                >
                                    Jadikan Acara Utama
                                </InputLabel>
                                <small className="text-slate-500">
                                    Countdown mengacu pada acara utama
                                </small>
                            </div>

                            <Switch
                                checked={!!data.acara_utama}
                                onChange={(value) =>
                                    setData("acara_utama", value)
                                }
                                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                            >
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                            </Switch>
                        </div>
                    </div>

                    <div className="p-6 border-t flex md:flex-row flex-col gap-2 md:justify-end">
                        <Button
                            onClick={() => setShow(false)}
                            type="button"
                            variant="primary-outline"
                        >
                            Batal
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Tambah"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default EventForm;
