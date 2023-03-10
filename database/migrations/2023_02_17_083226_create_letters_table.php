-- Active: 1676897150627@@127.0.0.1@3306@db_desa
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
        // Schema::create('letter_templates', function (Blueprint $table) {
        //     $table->uuid('id');
        //     $table->string('name');
        //     $table->string('type');
        //     $table->string('title');
        //     $table->string('header');
        //     $table->string('content');
        //     $table->string('footer');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('letters');
    }
};
