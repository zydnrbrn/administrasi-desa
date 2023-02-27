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
			$table->unsignedBigInteger('province_id')->nullable();
			$table->unsignedBigInteger('city_id')->nullable();
			$table->unsignedBigInteger('district_id')->nullable();
			$table->unsignedBigInteger('village_id')->nullable();
			$table->string('province', 100);
			$table->string('city', 100);
			$table->string('district', 100);
			$table->string('village', 100);
			$table->char('RT', 4)->nullable();
			$table->char('RW', 4)->nullable();
			$table->text('address_detail')->nullable();
			$table->integer('created_at');
			$table->integer('updated_at');
		});

		Schema::table('address', function (Blueprint $table) {
            $table->foreign('resident_id')
                    ->references('id')
                    ->on('residents')
                    ->onDelete('cascade');
			$table->foreign('province_id')
				->references('id')
				->on(config('laravolt.indonesia.table_prefix') . 'provinces')
				->onUpdate('cascade')->onDelete('restrict');
			$table->foreign('city_id')
				->references('id')
				->on(config('laravolt.indonesia.table_prefix') . 'cities')
				->onUpdate('cascade')->onDelete('restrict');
			$table->foreign('district_id')
				->references('id')
				->on(config('laravolt.indonesia.table_prefix') . 'districts')
				->onUpdate('cascade')->onDelete('restrict');
			$table->foreign('village_id')
				->references('id')
				->on(config('laravolt.indonesia.table_prefix') . 'villages')
				->onUpdate('cascade')->onDelete('restrict');
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
