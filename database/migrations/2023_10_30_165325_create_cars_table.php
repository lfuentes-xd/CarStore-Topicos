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
        Schema::create('Cars', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Id_Brand_fk');
            $table->string('Model');
            $table->integer('year');
            $table->string('Colour');
            $table->String('type');
            $table->String('fuel');
            $table->integer('Available');
            $table->timestamps();
            $table->String('Image',250);
            $table->string('Km', 250);
            $table->string('version', 250);
            $table->string('TM',250);
            $table->string('liters',250);
            $table->decimal('price', 10, 2);
            $table->foreign('Id_Brand_fk')->references('id')->on('Brands');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Cars');
    }
};
