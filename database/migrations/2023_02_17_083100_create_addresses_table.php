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
        Schema::create('address', function (Blueprint $table) {
			$table->uuid('id')->primary();
			$table->uuid('resident_id')->index();
			$table->string('province', 100);
			$table->string('city', 100);
			$table->string('district', 100);
			$table->string('village', 100);
            $table->string('street', 100);
			$table->char('RT', 4)->nullable();
			$table->char('RW', 4)->nullable();
			$table->timestamps();
		});

		Schema::table('address', function (Blueprint $table) {
            $table->foreign('resident_id')
                    ->references('id')
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
        Schema::dropIfExists('addresses');
    }
};
