<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Buyer extends Model
{

/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'Buyer';

    use HasFactory;
    public function User(): HasOne
    {
        return $this->hasOne(User::class);
    }
    protected $fillable = [
        'phone_number',
            'street',
            'House_number',
            'name',
            'Surname',//primer apellido
            'second_surname',
            'id_user',
    ];
}
