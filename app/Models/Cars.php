<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cars extends Model
{
    use HasFactory;
    protected $table = "cars";
    // public static $timestamps = false;

    public function Sale(): HasMany
    {
        return $this->hasMany(Sale::class);
    }

    public function Brands(): BelongsTo
    {
        return $this->belongsTo(brands::class, 'Id_Brand_fk');
    }

    protected $fillable = [
        'Id_Brand_fk',
        'Model',
        'year',
        'Colour',
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
