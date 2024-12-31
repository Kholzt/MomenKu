import Button from "@/components/Button";
import EventForm from "./EventForm";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useForm } from "@inertiajs/react";

const EventSection = ({
    setActiveIndex,
    activeIndex,
    idInvitation,
    events = [],
}) => {
    const [event, setEvent] = useState({});
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={`${activeIndex == 1 ? "" : "h-0"} min-w-full `}>
            <div className="p-6 border-b">
                <EventForm
                    show={showModal}
                    setShow={setShowModal}
                    event={event}
                    setEvent={setEvent}
                    idInvitation={idInvitation}
                />
            </div>
            {events?.length == 0 ? (
                <EmptyEvent></EmptyEvent>
            ) : (
                events?.map((event, index) => {
                    return (
                        <div key={index}>
                            <EventItem
                                setShowModal={setShowModal}
                                setEvent={setEvent}
                                event={event}
                            ></EventItem>
                            <hr />
                        </div>
                    );
                })
            )}

            <div className="flex md:flex-row flex-col gap-4 p-6 border-t bg-slate-50">
                <Button
                    onClick={() => setActiveIndex(0)}
                    type="button"
                    variant="primary-outline"
                    className="text-[--primary-color]"
                >
                    <i className="fa fa-arrow-left"></i> Kembali
                </Button>
                <Button
                    onClick={() => setActiveIndex(2)}
                    type="button"
                    variant="primary"
                    className="md:ms-auto"
                >
                    Lanjut <i className="fa fa-arrow-right"></i>
                </Button>
            </div>
        </div>
    );
};

export default EventSection;

function EmptyEvent() {
    return (
        <div className="h-52 text-center p-6">
            <h2 className="text-slate-700 ">
                <i className="fa-regular text-6xl fa-calendar me-2 block mb-2"></i>
                <span className="font-bold">Belum Ada Acara</span>
            </h2>
            <p className="text-slate-500">
                Silahkan tambahkan acara, Data acara dapat diubah setelah
                undangan selesai dibuat
            </p>
        </div>
    );
}

function EventItem(props) {
    const [show, setShow] = useState(false);
    const { delete: deleteMethod } = useForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        deleteMethod(route("invitation.deleteEvent", props.event.id));
    };
    return (
        <div className="px-6 py-4 md:flex-row flex-col flex md:justify-between gap-4 md:items-center">
            <div className="">
                <h3 className="text-xl font-medium mb-2">
                    {props.event.event_name}{" "}
                    {props.event.is_primary ? (
                        <span className="text-base text-slate-600">
                            (Acara utama)
                        </span>
                    ) : (
                        ""
                    )}
                </h3>
                <div className=" grid grid-cols-6 w-full flex-1 md:gap-3 gap-2">
                    <div className="md:col-span-2 col-span-6">
                        <p className="text-slate-600 text-sm">
                            <i className="fa fa-map me-2"></i>
                            {props.event.address}
                        </p>
                    </div>
                    <div className="flex md:col-span-4 gap-2 col-span-6 flex-col">
                        <span className="text-slate-600 text-sm">
                            <i className="fa   fa-calendar me-2"></i> Tanggal
                            acara {props.event.event_date}
                        </span>
                        <span className="text-slate-600 text-sm">
                            <i className="fa fa-clock me-2"></i> Waktu acara{" "}
                            {props.event.start_time} -{" "}
                            {props.event.end_time
                                ? props.event.end_time
                                : "Selesai"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <Button
                    onClick={() => setShow(true)}
                    type="button"
                    variant="danger-outline"
                    className="text-red-500"
                >
                    <i className="fa fa-trash text-sm"></i>
                </Button>
                <Button
                    onClick={() => {
                        props.setEvent(props.event);
                        props.setShowModal(true);
                    }}
                    type="button"
                >
                    <i className="fa fa-pencil text-sm"></i>
                </Button>
            </div>

            <Modal
                maxWidth="lg"
                onClose={() => setShow(false)}
                show={show}
                closeable
            >
                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-2">
                            Pemberitahuan
                        </h1>
                        <h6 className="text-lg font-medium">
                            Apakah anda yakin menghapus acara{" "}
                            {props.event.event_name}?
                        </h6>
                        <p className="text-slate-600">
                            Tindakan ini akan menghapus data acara secara
                            permanen
                        </p>
                    </div>
                    <div className="px-6 pb-6 flex gap-2 md:flex-row flex-col md:justify-end">
                        <Button
                            onClick={() => setShow(false)}
                            type="button"
                            variant="primary-outline"
                            className="text-[--primary-color]"
                        >
                            Batal
                        </Button>
                        <Button type="submit" variant="danger">
                            Hapus
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
