<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\BusinessResource;

class WarehouseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
 
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'address' => $this->address,
            'capacity' => $this->capacity,
            'available_capacity' => $this->available_capacity,
            'shipping_available' => $this->shipping_available,
            'service_fee' => $this->service_fee,
            'earnings' => $this->earnings,
            'warehouse_type' => $this->warehouse_type,
            // 'business' => BusinessResource::collection($this->Business),
            'business' => new BusinessResource($this->whenLoaded('Business')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
