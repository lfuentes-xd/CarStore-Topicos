<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auto extends Model
{
    use HasFactory;
    // public static $timestamps = false;


    protected $fillable = [
        'Id_marca_fk',
        'Modelo',
        'año',
        'Color',
        'Carroceria',
        't_combustible',
        'Existencias',
        'Image'
        // Otros campos que quieres que Laravel pueda asignar masivamente
    ];

}
