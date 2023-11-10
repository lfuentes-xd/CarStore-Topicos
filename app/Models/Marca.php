<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Marca extends Model
{
    use HasFactory;
<<<<<<< HEAD
    protected $fillable = [
        'Descripción'
    ];
=======
    public function Auto(): HasMany
    {
        return $this->hasMany(Auto::class);
    }
>>>>>>> 38211a62f074865df6a7f0ec1c1b6d656364c969
}
