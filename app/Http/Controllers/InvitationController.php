<?php

namespace App\Http\Controllers;

use App\Models\BridesModel;
use App\Models\EventsModel;
use App\Models\InvitationsModel;
use Illuminate\Http\Request;

class InvitationController extends Controller
{
    public function create()
    {
        $activeIndex = 0;

        return inertia("member/invitation/Form", ["activeIndex" => $activeIndex]);
    }
    public function edit($id)
    {
        $activeIndex = 0;
        $brides = [];
        $brides = BridesModel::where("invitation_id", $id)->orderBy("order", "asc")->get();
        if (!$brides) {
            return redirect()->back()->with("error", "Undangan tidak ditemukan");
        }
        $event = EventsModel::where("invitation_id", $id)->orderBy("is_primary", "desc")->get();
        if (!$event) {
            return redirect()->back()->with("error", "Undangan tidak ditemukan");
        }
        return inertia("member/invitation/Form", ["activeIndex" => $activeIndex, "idInvitation" => $id, "brides" => $brides, "events" => $event]);
    }

    public function storeBride()
    {
        // Validasi request
        $validatedData = request()->validate([
            'nama_lengkap_pria' => 'required|string|max:150',
            'nama_panggilan_pria' => 'required|string|max:100',
            'nama_ayah_pria' => 'nullable|string|max:150',
            'nama_ibu_pria' => 'nullable|string|max:150',
            'nama_lengkap_wanita' => 'required|string|max:150',
            'nama_panggilan_wanita' => 'required|string|max:100',
            'nama_ayah_wanita' => 'nullable|string|max:150',
            'nama_ibu_wanita' => 'nullable|string|max:150',
        ], [
            'required' => ':attribute wajib diisi.',
            'string' => ':attribute harus berupa teks.',
            'max' => ':attribute tidak boleh lebih dari :max karakter.',
        ], [
            'nama_lengkap_pria' => 'Nama Lengkap',
            'nama_panggilan_pria' => 'Nama Panggilan',
            'nama_ayah_pria' => 'Nama Ayah',
            'nama_ibu_pria' => 'Nama Ibu',
            'nama_lengkap_wanita' => 'Nama Lengkap',
            'nama_panggilan_wanita' => 'Nama Panggilan',
            'nama_ayah_wanita' => 'Nama Ayah',
            'nama_ibu_wanita' => 'Nama Ibu',
        ]);



        $result = InvitationsModel::create(["user_id" => auth()->user()->id]);

        // Menyimpan input ke dalam variabel
        $manData = [
            'full_name' => $validatedData['nama_lengkap_pria'],
            'nickname' => $validatedData['nama_panggilan_pria'],
            'father_name' => $validatedData['nama_ayah_pria'],
            'mother_name' => $validatedData['nama_ibu_pria'],
            "order" => 1,
            "invitation_id" => $result->id
        ];

        $womenData = [
            'full_name' => $validatedData['nama_lengkap_wanita'],
            'nickname' => $validatedData['nama_panggilan_wanita'],
            'father_name' => $validatedData['nama_ayah_wanita'],
            'mother_name' => $validatedData['nama_ibu_wanita'],
            "order" => 2,
            "invitation_id" => $result->id
        ];



        BridesModel::create($manData);
        BridesModel::create($womenData);

        return redirect()->route("invitation.edit", $result->id);
    }
    public function updateBride($id)
    {
        // Validasi request
        $validatedData = request()->validate([
            'nama_lengkap_pria' => 'required|string|max:150',
            'nama_panggilan_pria' => 'required|string|max:100',
            'nama_ayah_pria' => 'nullable|string|max:150',
            'nama_ibu_pria' => 'nullable|string|max:150',
            'nama_lengkap_wanita' => 'required|string|max:150',
            'nama_panggilan_wanita' => 'required|string|max:100',
            'nama_ayah_wanita' => 'nullable|string|max:150',
            'nama_ibu_wanita' => 'nullable|string|max:150',
        ], [
            'required' => ':attribute wajib diisi.',
            'string' => ':attribute harus berupa teks.',
            'max' => ':attribute tidak boleh lebih dari :max karakter.',
        ], [
            'nama_lengkap_pria' => 'Nama Lengkap',
            'nama_panggilan_pria' => 'Nama Panggilan',
            'nama_ayah_pria' => 'Nama Ayah',
            'nama_ibu_pria' => 'Nama Ibu',
            'nama_lengkap_wanita' => 'Nama Lengkap',
            'nama_panggilan_wanita' => 'Nama Panggilan',
            'nama_ayah_wanita' => 'Nama Ayah',
            'nama_ibu_wanita' => 'Nama Ibu',
        ]);




        // Menyimpan input ke dalam variabel
        $manData = [
            'full_name' => $validatedData['nama_lengkap_pria'],
            'nickname' => $validatedData['nama_panggilan_pria'],
            'father_name' => $validatedData['nama_ayah_pria'],
            'mother_name' => $validatedData['nama_ibu_pria'],
            "order" => 1,
            "invitation_id" => $id
        ];

        $womenData = [
            'full_name' => $validatedData['nama_lengkap_wanita'],
            'nickname' => $validatedData['nama_panggilan_wanita'],
            'father_name' => $validatedData['nama_ayah_wanita'],
            'mother_name' => $validatedData['nama_ibu_wanita'],
            "order" => 2,
            "invitation_id" => $id
        ];


        BridesModel::where("invitation_id", "=", $id)->delete();
        BridesModel::where("invitation_id", "=", $id)->delete();

        BridesModel::create($manData);
        BridesModel::create($womenData);

        return redirect()->route("invitation.edit", $id);
    }


    public function storeEvent($id)
    {
        $validated = request()->validate([
            'judul' => 'required|string|max:255',
            'tanggal' => 'required|date|after_or_equal:today',
            'jam_mulai' => 'required|date_format:H:i',
            'jam_selesai' => 'nullable|date_format:H:i|after:jam_mulai',
            'alamat' => 'required|string|max:500',
            'acara_utama' => 'boolean',
        ], [
            'judul.required' => 'Judul acara wajib diisi.',
            'judul.max' => 'Judul acara tidak boleh lebih dari 255 karakter.',
            'tanggal.required' => 'Tanggal acara wajib diisi.',
            'tanggal.date' => 'Tanggal acara harus berupa format tanggal yang valid.',
            'tanggal.after_or_equal' => 'Tanggal acara tidak boleh sebelum hari ini.',
            'jam_mulai.required' => 'Jam mulai acara wajib diisi.',
            'jam_mulai.date_format' => 'Jam mulai harus dalam format HH:MM.',
            'jam_selesai.date_format' => 'Jam selesai harus dalam format HH:MM.',
            'jam_selesai.after' => 'Jam selesai harus setelah jam mulai.',
            'alamat.required' => 'Alamat acara wajib diisi.',
            'alamat.max' => 'Alamat tidak boleh lebih dari 500 karakter.',
            'acara_utama.boolean' => 'Nilai acara utama harus berupa boolean.',
        ]);

        $data = [
            "invitation_id" => $id,
            "event_name" => request()->judul,
            "event_date" => request()->tanggal,
            "start_time" => request()->jam_mulai,
            "end_time" => request()->jam_sampai_selesai ?   null : request()->jam_selesai,
            "address" => request()->alamat,
            "is_primary" => request()->acara_utama
        ];
        // Simpan data ke database
        EventsModel::create($data);

        return redirect()->route('invitation.edit', $id)->with('success', 'Acara berhasil ditambahkan!');
    }
}
