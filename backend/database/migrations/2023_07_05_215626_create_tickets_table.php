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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->integer('from');
            $table->integer('to');
            $table->integer('state');
            $table->integer('purpose');
            // $table->unsignedBigInteger('warehouse_id');
            // $table->foreign('warehouse_id')->references('id')->on('warehouses')->onDelete('cascade');
            // $table->unsignedBigInteger('product_id');
            // $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};
