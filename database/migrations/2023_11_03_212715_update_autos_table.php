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
        Schema::table('autos', function (Blueprint $table) {
            $table->String('Image',250);
            $table->string('Km', 250);
            $table->string('version', 250);
            $table->string('TM',250);
            $table->string('liters',250);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('autos', function (Blueprint $table) {
            $table->dropColumn('Image');
            $table->dropColumn('Km');
            $table->dropColumn('version');
            $table->dropColumn('TM');
            $table->dropColumn('liters');

        });
    }
};
