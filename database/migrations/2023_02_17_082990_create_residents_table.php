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
        Schema::create('residents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('NIK')->index();
            $table->integer('KK_code');
            $table->string('name');
            $table->string('date_place_birth');
            $table->enum('gender', ['laki-laki', 'perempuan']);
            $table->string('religion');
            $table->string('marital_status');
            $table->string('job');
            $table->string('citizenship');
            $table->string('valid_until');
            $table->string('blood_type');
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
        Schema::dropIfExists('residents');
    }
};
