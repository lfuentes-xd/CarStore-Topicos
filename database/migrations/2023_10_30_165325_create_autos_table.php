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
        Schema::create('autos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Id_marca_fk');
            $table->string('Modelo');
            $table->integer('año');
            $table->string('Color');
            $table->String('Carroceria');
            $table->String('t_combustible');
            $table->integer('Existencias');
            $table->timestamps();
            $table->String('Image',250);
            $table->string('Km', 250);
            $table->string('version', 250);
            $table->string('TM',250);
            $table->string('liters',250);
            $table->decimal('price', 10, 2);
            $table->foreign('Id_marca_fk')->references('id')->on('marcas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autos');
    }
};
