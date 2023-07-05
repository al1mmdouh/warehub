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
        // Schema::create('order_product', function (Blueprint $table) {
        //     $table->foreignIdFor(product::class);
        //     $table->foreignIdFor(order::class);
        //     $table->decimal('price',10,2);
        //     $table->integer('quantity');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_product');
    }
};
