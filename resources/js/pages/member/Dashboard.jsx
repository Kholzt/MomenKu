import React from "react";
import DashboardLayout from "../layouts/member/DashboardLayout";
import Button from "@/components/Button";
import { Head, Link } from "@inertiajs/react";

const Dashboard = ({ data }) => {
    const { invitations } = data;
    return (
        <DashboardLayout>
            <Head title="Dashboard " />
            <div className="bg-white rounded-md p-4">
                <div className="flex gap-2 md:flex-row flex-col justify-between  items-center ">
                    <div className="">
                        <h2 className="text-lg font-medium">List undangan</h2>
                        <p className="text-slate-600">
                            Buat berbagai macam undangan dalam satu platform
                            MomenKu
                        </p>
                    </div>
                    <Button
                        type="link"
                        href={route("invitation.create")}
                        className="md:w-auto w-full"
                    >
                        Buat Undangan
                    </Button>
                </div>
                <ul className="flex flex-col gap-5">
                    {invitations.map((invitation, index) => {
                        return (
                            <li>
                                <hr className="my-4" />

                                <div className="flex md:flex-row flex-col md:items-end md:gap-10 gap-5">
                                    <div className="">
                                        <h3 className="text-md mb-1 font-medium">
                                            <i className="fa fa-user-group me-2"></i>{" "}
                                            Ahmad & Yani
                                        </h3>
                                        <Link href="https://momenku.kholzt.com/ahmad-yani">
                                            <p className="text-sm text-slate-600">
                                                <i className="fa fa-link me-2"></i>{" "}
                                                https://momenku.kholzt.com/ahmad-yani
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <p className="text-sm mb-2 text-slate-600">
                                            <i className="fa fa-calendar me-2"></i>{" "}
                                            Aktif sampai 1 Januari 2025
                                        </p>
                                        <p className="text-sm text-slate-600">
                                            <i className="fa fa-calendar me-2"></i>{" "}
                                            Batas perubahan sampai 28 Desember
                                            2024
                                        </p>
                                    </div>
                                    <Button
                                        href={route(
                                            "invitation.edit",
                                            invitation.id
                                        )}
                                        className="md:ms-auto md:me-0 me-auto"
                                        type="link"
                                    >
                                        Dashboard
                                    </Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
