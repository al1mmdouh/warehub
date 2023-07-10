<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'id'=>$this->id,
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'sku' => $this->sku,
            'quantity'=>$this->quantity,
            'price' => $this->price,
            'weight' => $this->weight,
            'image' => $this->image,
            'business_name' => $this->business->name,
            'warehouse' => $this->warehouse->name,
       
        ];
    }
}
