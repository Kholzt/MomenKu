<?php

use App\Http\Controllers\DashboardMemberController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [LandingController::class, "index"])->name("landing");
Route::get('/themes', [LandingController::class, "themes"])->name("landing.themes");
Route::get('/FAQ', action: [LandingController::class, "faq"])->name("landing.faq");


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/member/dashboard', [DashboardMemberController::class, "index"])->name('dashboard');
    Route::get('/new-invitation', [InvitationController::class, "create"])->name('invitation.create');
    Route::get('/new-invitation/{id}', [InvitationController::class, "edit"])->name('invitation.edit');
    Route::post('/new-invitation/brides', [InvitationController::class, "storeBride"])->name('invitation.storeBride');
    Route::put('/new-invitation/brides/{id}', [InvitationController::class, "updateBride"])->name('invitation.updateBride');
    Route::post('/new-invitation/events/{id}', [InvitationController::class, "storeEvent"])->name('invitation.storeEvent');
    Route::put('/new-invitation/events/{id}', [InvitationController::class, "updateEvent"])->name('invitation.updateEvent');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/member/profile', [ProfileController::class, 'editMember'])->name('profile.editMember');
    Route::patch('/member/profile', [ProfileController::class, 'updateMember'])->name('profile.updateMember');
    Route::delete('/member/profile', [ProfileController::class, 'destroyMember'])->name('profile.destroyMember');
});

require __DIR__ . '/auth.php';
