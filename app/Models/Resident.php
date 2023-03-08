<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Resident extends Model
{
    protected $table = 'residents';
    protected $guarded = [];
    protected $keyType = 'string';
    use HasFactory;

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id = (string) Uuid::generate(4);
        });
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class);
    }
}
