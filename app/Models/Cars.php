<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cars extends Model
{
    use HasFactory;
    protected $table = "Cars";
    // public static $timestamps = false;

    public function Venta(): HasMany
    {
        return $this->hasMany(Venta::class);
    }

    public function Brands(): BelongsTo
    {
        return $this->belongsTo(brands::class, 'Id_Brand_fk', 'id');
    }

    protected $fillable = [
        'Id_Brand_fk',
        'Model',
        'year',
        'Color',
        'type',
        'fuel',
        'Available',
        'Image',
        'Km',
        'version',
        'TM',
        'liters',
        'price'
        // Otros campos que quieres que Laravel pueda asignar masivamente
    ];
}