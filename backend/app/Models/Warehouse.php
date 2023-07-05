<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use HasFactory;
    protected $fillable = [
        'owner_id',
        'name',
        'address',
        'available_capacity',
        'capacity',
        'service_fee',
        'earnings',
        'shipping_available',
    ];
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
    public function Business()
    {
        
        return $this->belongsTo(Business::class);
    }
}
