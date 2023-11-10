<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Comprador extends Model
{

/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'compradores';

    use HasFactory;
    public function User(): HasOne
    {
        return $this->hasOne(User::class);
    }
    protected $fillable = [
        'teléfono',
            'calle',
            'N_casa',
            'Nombre',
            'per_apellido',
            'sdo_apellido',
            'id_usuario',
    ];
}
