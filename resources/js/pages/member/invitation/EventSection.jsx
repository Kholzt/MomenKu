import Button from "@/components/Button";
import EventForm from "./EventForm";

const EventSection = ({
    setActiveIndex,
    activeIndex,
    idInvitation,
    events = [],
}) => {
    return (
        <div className={`${activeIndex == 1 ? "" : "h-0"} min-w-full `}>
            <div className="p-6 border-b">
                <EventForm idInvitation={idInvitation} />
            </div>
            {events?.length == 0 ? (
                <EmptyEvent></EmptyEvent>
            ) : (
                events?.map((event, index) => {
                    return (
                        <>
                            <EventItem key={index} event={event}></EventItem>
                            <hr />
                        </>
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
                    onClick={() => setActiveIndex(1)}
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
    return (
        <div className="px-6 py-4 md:flex-row flex-col flex justify-between items-center">
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
                <div className=" grid grid-cols-6  flex-1 md:gap-3 gap-2">
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
                    type="button"
                    variant="danger-outline"
                    className="text-red-500"
                >
                    <i className="fa fa-trash text-sm"></i>
                </Button>
                <Button type="button">
                    <i className="fa fa-pencil text-sm"></i>
                </Button>
            </div>
        </div>
    );
}
