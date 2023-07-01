<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = [];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)->withPivot(['price', 'quantity']);
    }
}
