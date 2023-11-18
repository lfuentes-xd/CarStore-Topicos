<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sale extends Model
{
    protected $table = "Sale";
    protected $fillable=[
        'Id_foreign_key',
        'Id_foreign_keycars',
        'amount'

    ];
    use HasFactory;
    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function Auto(): BelongsTo
    {
        return $this->belongsTo(Cars::class);
    }
}

