<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {


        Schema::create('themes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('slug', 100)->unique();
            $table->string('thumbnail', 255);
            $table->integer('price')->default(0);
            $table->text('description')->nullable();
            $table->text('template')->nullable();
            $table->timestamps();
        });

        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('theme_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->string('map_address', 255);
            $table->date('date_of_event');
            $table->timestamps();

            $table->foreign('theme_id')->references('id')->on('themes')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('brides', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('invitation_id')->unsigned();
            $table->enum('type', ["putra", "putri"]);
            $table->string('fullname', 150);
            $table->string('nickname', 100)->nullable();
            $table->string('name_of_father', 150)->nullable();
            $table->string('name_of_mother', 150)->nullable();
            $table->integer('order')->nullable();
            $table->timestamps();

            $table->foreign('invitation_id')->references('id')->on('invitations')->onDelete('cascade');
        });

        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('invitation_id')->unsigned();
            $table->date('date_of_event');
            $table->time('early_event_time')->nullable();
            $table->time('final_event_time')->nullable();
            $table->string('address', 255);
            $table->enum('type', ["reception", "contract"]);
            $table->timestamps();

            $table->foreign('invitation_id')->references('id')->on('invitations')->onDelete('cascade');
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('invitation_id')->unsigned();
            $table->string('fullname', 150);
            $table->text('comments');
            $table->timestamps();

            $table->foreign('invitation_id')->references('id')->on('invitations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
        Schema::dropIfExists('events');
        Schema::dropIfExists('brides');
        Schema::dropIfExists('invitations');
        Schema::dropIfExists('themes');
    }
};
