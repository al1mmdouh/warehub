<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Business extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'business_name',
        'business_address',
        'business_type',
    ];

    // public function setUserIdAttribute($user_id)
    // {
    //     $this->attributes['user_id'] = Auth::id();
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

<<<<<<< HEAD
    public function warehouse():HasMany
    {
        return $this->hasMany(Warehouse::class);
    }
}
=======
    public function getNameAttribute()
    {
        return $this->business_name;
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
}
>>>>>>> origin/backend-orders-management
