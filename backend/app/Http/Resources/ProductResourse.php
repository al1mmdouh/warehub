<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResourse extends JsonResource
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
            'name'=>$this->name,
            'description'=>$this->description,
            'sku'=>$this->sku,
            'price' => $this->price,
            'weight' => $this-> weight,
            'image' => $this->image
        ];
    }
}
