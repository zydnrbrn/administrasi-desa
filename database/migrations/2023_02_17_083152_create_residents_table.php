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
            $table->uuid('id');
            $table->integer('NIK')->index();
            $table->integer('KK_code');
            $table->enum('type',['Kepala Keluarga','Anggota Keluarga'])->default('Anggota Keluarga');
            $table->string('name');
            $table->string('date_place_birth');
            $table->enum('gender', ['Laki-Laki', 'Perempuan']);
            $table->uuid('address_id');
            $table->enum('religion', ['Islam', 'Kristen', 'Budha', 'Konghucu', 'Katholik', 'Hindu']);
            $table->string('marital_status');
            $table->string('job');
            $table->string('citizenship');
            $table->string('valid_until');
            $table->timestamps();

            $table->foreign('address_id')
                    ->references('id')
                    ->on('address')
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
        Schema::dropIfExists('residents');
    }
};
