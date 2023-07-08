<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWarehouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:30|unique:warehouses',
            'address' => 'required|string|max:200',
            'capacity' => 'required|numeric',
            'available_capacity' => 'required|numeric',
            'shipping_available' => 'required|boolean',
            'service_fee' => 'required|numeric',
            'earnings' => 'required|numeric',
            'warehouse_type' => 'required|string',
        ];
    }
}
