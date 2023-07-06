<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BusinessResource extends JsonResource
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
            'user_id'=>$this->user_id,
            'business_name' => $this->business_name,
            'business_address' => $this->business_address,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'business_type'=>$this->business_type,

        ];
    }
}
