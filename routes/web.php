<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
	Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

	Route::resource('project', ProjectController::class);
	Route::resource('user', UserController::class);
	Route::resource('task', TaskController::class);
});

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
