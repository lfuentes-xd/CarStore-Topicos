<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class brands extends Model
{
    use HasFactory;

    protected $table = "brands";
    protected $fillable = [
        'Desc'
    ];
    public function Auto(): HasMany
    {
        return $this->hasMany(Auto::class, 'Id_Brand_fk', 'id');
    }
}
