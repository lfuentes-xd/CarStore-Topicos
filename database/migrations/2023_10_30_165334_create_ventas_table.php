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
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario_fk');
            $table->unsignedBigInteger('id_Auto_fk');
            $table->bigInteger('monto');
            $table->timestamps();

            $table->foreign('id_usuario_fk')->references('id')->on('users');
            $table->foreign('id_Auto_fk')->references('id')->on('Cars');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas');
    }
};
