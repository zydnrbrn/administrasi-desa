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
        Schema::create('sktms', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('no_surat');
            $table->integer('NIK');
            $table->string('title');
            $table->string('header');
            $table->string('content');
            $table->string('footer');
            $table->timestamps();

            $table->foreign('NIK')
                    ->references('NIK')
                    ->on('residents')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sktms');
    }
};
