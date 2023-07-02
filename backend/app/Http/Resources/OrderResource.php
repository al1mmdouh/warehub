<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'business_id'=>$this->business_id,
            'order_id'=>$this->id,
            'payment_token'=>$this->payment_token,
            'tax'=>$this->tax,
            'discount'=>$this->discount,
            'price'=>$this->price,
            'total'=>$this->total,
            'status'=>$this->status,
            'shipping_data'=>$this->shipping_data,
            'products' => ProductResource::collection($this->products),
           
        ];
    }
}
