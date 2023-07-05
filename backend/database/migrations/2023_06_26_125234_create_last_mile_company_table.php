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
        Schema::create('last_mile_company', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->double('standerd_weight',10,2);
            $table->double('order_rate',10,2);
            $table->double('extra_weight_rate',10,2);
            $table->timestamps();
            $table->softDeletes();
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('last_mile_company');
    }
};
