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
        Schema::create('compradores', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->bigInteger('teléfono');
            $table->string('calle');
            $table->string('N_casa');
            $table->string('Nombre');
            $table->string('per_apellido');
            $table->string('sdo_apellido');
            $table->timestamps();

            $table->foreign('id_usuario')->references('id')->on('users');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        

        Schema::table('compradores', function (Blueprint $table) {
            $table->dropForeign(['id_usuario']);
        });
        Schema::dropIfExists('compradores');
    }
};
