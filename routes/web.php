<?php

use App\Http\Controllers\DashboardMemberController;
use App\Http\Controllers\LandingController;
use App\Models\Comments;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingController::class, "index"]);
Route::get('/themes', [LandingController::class, "themes"]);
Route::get('/member', [DashboardMemberController::class, "index"]);


Route::get('/comments', function () {
    $data = Comments::orderBy("id", "Desc")->get();
    return response($data);
});
Route::post('/comments', function () {
    try {
        $data = Comments::create(["nama" => request("nama"), "keterangan" => request("keterangan")]);
        return response($data);
    } catch (\Throwable $th) {
        return response(["error" => $th->getMessage()], 200);
    }
});
// Route::get('/{name}', function ($name) {
//     return view('index');
// });
