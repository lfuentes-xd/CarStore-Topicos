<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Auto extends Model
{
    use HasFactory;
    // public static $timestamps = false;

    public function Venta(): HasMany
    {
        return $this->hasMany(Venta::class);
    }
    public function Marca(): BelongsTo
    {
        return $this->belongsTo(Marca::class);
    }

    protected $fillable = [
        'Id_marca_fk',
        'Modelo',
        'año',
        'Color',
        'Carroceria',
        't_combustible',
        'Existencias',
        'Image',
        'Km',
        'version',
        'TM',
        'liters',
        'price'
        // Otros campos que quieres que Laravel pueda asignar masivamente
    ];

}
