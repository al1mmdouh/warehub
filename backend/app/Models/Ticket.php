<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'from',
        'to',
        'state',
        'purpose',
       
    ];
    public function warehouse()
    {
        
        return $this->belongsTo(Warehouse::class);
    }
}
