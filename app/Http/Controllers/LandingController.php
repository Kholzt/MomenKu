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
            ->paginate(8);
        $params["data"] = (object)[
            "themes" => $themes,
            "key" => $key,
            "type" => $type
        ];
        return inertia("themes/Theme", $params);
    }
    public function faq()
    {

        $params["questions"] = [
            [
                "question" => "Apa itu aplikasi undangan online?",
                "answer" => "Aplikasi undangan online adalah platform digital yang memungkinkan pengguna membuat, mengirim, dan mengelola undangan acara seperti pernikahan, ulang tahun, atau acara lainnya secara online. Undangan ini dapat diakses melalui tautan yang dapat dibagikan melalui media sosial atau pesan instan."
            ],
            [
                "question" => "Bagaimana cara membuat undangan di aplikasi ini?",
                "answer" => "Daftar atau login ke akun Anda.Pilih template undangan sesuai acara.Isi detail acara seperti nama, tanggal, lokasi, dan deskripsi. Tambahkan foto atau video jika diperlukan. Simpan dan dapatkan tautan undangan Anda untuk dibagikan.",
            ],
            [
                "question" =>
                "Apakah undangan online ini bisa dikustomisasi?",
                "answer" => "Ya, undangan dapat dikustomisasi sepenuhnya. Anda dapat mengubah warna, font, desain, menambahkan foto, video, dan detail acara sesuai kebutuhan.",
            ],
        ];
        return inertia("FAQ/FAQ", $params);
    }
}
