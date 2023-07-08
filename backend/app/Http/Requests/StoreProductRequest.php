<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
                'name'=>['required','alpha_num:ascii','min:3'],
                'description'=>['min:8','max:255'],
                'sku'=>['required','unique:products'],
                'price'=>['required','numeric'],
                'weight'=>['numeric'],
                'image' => ['required','file','max:15360', 'mimes:png,jpg,jpeg,gif'],
                'business_id'=>['required'],
                'quantity'=>['required','numeric'],
        ];
    }
}
