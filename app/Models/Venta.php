<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Venta extends Model
{
    protected $fillable=[
        'id-usuario_fk',
        'id_Auto_fk',
        'monto'

    ];
    use HasFactory;
    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function Auto(): BelongsTo
    {
        return $this->belongsTo(Auto::class);
    }
}

