<?php

namespace App\Http\Controllers;

use App\Models\ThemesModel;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        $themes = ThemesModel::orderBy("id", "Desc")
            ->limit(4)
            ->get();
        $params["data"] = (object)[
            "themes" => $themes
        ];
        return inertia("landing/Landing", $params);
    }
    public function themes()
    {
        $key = request("key");
        $type = request("type");
        $themes = ThemesModel::orderBy("id", "Desc")
            ->when($key, function ($qr) use ($key) {
                $qr->where("name", "like", "%$key%");
            })
            ->when($type == "free", function ($qr) use ($type) {
                $qr->where("price", "=", 0.0);
            })
            ->when($type == "pro", function ($qr) use ($type) {
                $qr->where("price", "!=", 0.0);
            })
            ->paginate(9);
        $params["data"] = (object)[
            "themes" => $themes,
            "key" => $key,
            "type" => $type
        ];
        return inertia("themes/Theme", $params);
    }
}
