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
        Schema::create('sale', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Id_foreign_key');
            $table->unsignedBigInteger('Id_foreign_keycars');
            $table->bigInteger('amount');
            $table->timestamps();

            $table->foreign('Id_foreign_key')->references('id')->on('users');
            $table->foreign('Id_foreign_keycars')->references('id')->on('Cars');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sale');
    }
};
