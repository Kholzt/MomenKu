<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardMemberController extends Controller
{
    public function index()
    {
        //testing
        return inertia("member/Dashboard");
    }
}
