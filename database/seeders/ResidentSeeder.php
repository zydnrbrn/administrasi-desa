<?php

namespace Database\Seeders;

use App\Models\Resident;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ResidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 1000; $i++) {

        $faker = Faker::create();
        Resident::create([
            'nik'       => rand(1, 1000),
            'KK_code'   => rand(1, 1000),
            'name'      => $faker->name(),
            'date_place_birth'  => $faker->address(),
            'gender'    => 'laki-laki',
            'religion'  => 'Islam',
            'marital_status'    => 'KAWIN',
            'job'       => $faker->word(),
            'citizenship'   => $faker->state(),
            'valid_until'   => $faker->date()
        ]);
    }
    }
}
