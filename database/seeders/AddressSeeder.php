<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Address;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $faker = Faker::create();
          Address::create([
                'resident_id'  => $resident->id,
                'province' => $faker->state(),
                'city' => $faker->city(),
                'district' => $faker->city(),
                'village' => $faker->city(),
                'street' => 'cimenteng',
                'RT' => rand(1, 5),
                'RW' => rand(1, 5)
            ]);
    }
}
