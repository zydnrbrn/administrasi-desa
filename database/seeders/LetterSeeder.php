<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Letter;
use Faker\Factory as Faker;

class LetterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i = 0; $i < 1000; $i++) {
            Letter::create([
                'no_surat'  => rand(1, 1000),
                'nik'       => 1441,
                // 'type'      => 'SKTM',
                'objective'      => $faker->sentence(),
            ]);
        }


    }
}
