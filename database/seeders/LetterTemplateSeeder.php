<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\LetterTemplate;

class LetterTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LetterTemplate::create([
            'name'  => 'Template Sktm',
            'type'  => 'SKTM',
            'title' => Str::random(25),
            'header' => Str::random(25),
            'content' => Str::random(25),
            'footer' => Str::random(25),
        ]);
    }
}
