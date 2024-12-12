<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        // Users table


        // Subscription levels table
        Schema::create('subscription_levels', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Free, Premium, Pro, etc.
            $table->decimal('price', 8, 2)->default(0); // Price per month/year
            $table->json('features'); // Store features in JSON format
            $table->tinyInteger('level')->default(1); // Store features in JSON format
            $table->timestamps();
        });

        // Events table
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('event_date');
            $table->unsignedBigInteger('template_id')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        // Templates table
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string("name", 50);
            $table->string("slug", 50)->unique();
            $table->string("description", 100)->nullable();
            $table->string("thumbnail", 255);
            $table->unsignedBigInteger('level_required')->default(1); // Free by default
            $table->timestamps();

            $table->foreign('level_required')->references('id')->on('subscription_levels');
        });

        // Payments table
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('subscription_level_id');
            $table->decimal('amount', 8, 2);
            $table->date('payment_date');
            $table->date('expiry_date');
            $table->string('status')->default('pending'); // pending, success, failed
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('subscription_level_id')->references('id')->on('subscription_levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
        Schema::dropIfExists('templates');
        Schema::dropIfExists('events');
        Schema::dropIfExists('subscription_levels');
        Schema::dropIfExists('users');
    }
};
