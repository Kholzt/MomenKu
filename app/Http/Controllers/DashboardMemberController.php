<?php

namespace App\Http\Controllers;

use App\Models\InvitationsModel;

class DashboardMemberController extends Controller
{
    public function index()
    {
        $invitations = InvitationsModel::where("user_id", auth()->user()->id)
            ->with(["brides", "theme", "events"])
            ->orderBy("id", "desc")
            ->get();
        $params["data"] = (object)[
            "invitations" => $invitations
        ];
        return inertia("member/Dashboard", $params);
    }
}
