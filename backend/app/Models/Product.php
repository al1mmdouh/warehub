<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia;
    protected $guarded = [];

    public function registerMediaCollection(): void
    {
        $this->addMediaCollection('image')->singleFile();
    }

    public function setImageAttribute($value){
        if(!empty($value)){
            $this->addMedia($value)->setName('image')
            ->toMediaCollection('image');
        }
    }

    public function getImageAttribute(){
        return $this->getFirstMediaUrl('image');
    }

    public function business() :BelongsTo
    {
        return $this->belongsTo(Business::class);
    }


}
