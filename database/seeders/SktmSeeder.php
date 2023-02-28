<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sktm;
use Faker\Factory as Faker;

class SktmSeeder extends Seeder
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
            Sktm::create([
                'no_surat'  => rand(1, 1000),
                'nik'       => 126,
                'title'      => $faker->sentence(),
                'header'      => $faker->sentence(),
                'content'      => $faker->sentence(),
                'footer'      => $faker->sentence(),
            ]);
        }


    }
}
