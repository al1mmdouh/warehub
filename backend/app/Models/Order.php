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
    
    protected $casts = [
        'shipping_data'=>'array',
    ];
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
    // get total orders shipping fees
    function getFeesAttribute()
    {
       
       if($this->weight <=  $this->shipping_data['standerd_weight']){
        return $this->shipping_data['order_rate'];
       }
       $extra_weight = ceil($this->weight - $this->shipping_data['standerd_weight']);
       $fees = $this->shipping_data['order_rate'] + ($extra_weight*$this->shipping_data['extra_weight_rate']);
        return $fees;

      
    }

    // get total orders price after tax and discount and shipping fees  

    public function getTotalAttribute()
    {
       return $this->price + ($this->tax * $this->price) - ($this->discount * $this->price) + $this->fees;

    }


    public function business(): BelongsToMany
    {
       return $this->belongsToMany(Business::class);
    }   

    // get all order weight
    public function getWeightAttribute()
    {
        $total_products_weight = 0;
        foreach($this->products as $product){
            $total_products_weight += $product->weight * $product->pivot->quantity;
        }
          return $total_products_weight/1000;
    }
   
    public function getQuantityAttribute()
    {
        $order_product_quantity = [];
        foreach($this->products as $product){
           $quantity = $product->pivot;
           array_push($order_product_quantity,$quantity);
        }
         return $order_product_quantity;
    }
   
}


