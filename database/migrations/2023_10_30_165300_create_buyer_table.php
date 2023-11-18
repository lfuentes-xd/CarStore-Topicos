<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('buyer', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_user');
            $table->bigInteger('phone_number');
            $table->string('street');
            $table->string('House_number');
            $table->string('name');
            $table->string('Surname');
            $table->string('second_surname');
            $table->timestamps();

            $table->foreign('id_user')->references('id')->on('users');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        

        Schema::table('buyer', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
        });
        Schema::dropIfExists('buyer');
    }
};
