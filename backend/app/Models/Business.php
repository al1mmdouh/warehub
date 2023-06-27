<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
}