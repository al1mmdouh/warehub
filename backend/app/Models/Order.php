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

    // get total products price before tax and discount

    public function getPriceAttribute()
    {
        $total_products_price = 0;
        foreach($this->products as $product){
            $total_products_price += $product->pivot->price * $product->pivot->quantity;
        }
        
        return $total_products_price;

    }
    // get total orders price after tax and discount  

    public function getTotalAttribute()
    {
       return $this->price - $this->tax + $this->discount;

    }
}
