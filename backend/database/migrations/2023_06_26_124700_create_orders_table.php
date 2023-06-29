<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('orders', function (Blueprint $table) {
        //     $table->id();
        //     $table->unsignedBigInteger('warhouse_id');
        //     $table->foreign('warhouse_id')->references('id')->on('warehouses')->onDelete('cascade');
        //     $table->unsignedBigInteger('merchant_id');
        //     $table->foreign('merchant_id')->references('id')->on('merchants')->onDelete('cascade');
        //     $table->enum('status',['done','processing','delivered']);
        //     $table->string('payment_token');
        //     $table->json('shipping_data')->nullable();
        //     $table->double('total');
        //     $table->double('price');
        //     $table->double('tax')->default(0);
        //     $table->double('discount')->default(0);
        //     $table->timestamps();
        //     $table->softDeletes();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
