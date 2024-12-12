<?php

namespace Database\Seeders;

use App\Models\SubscriptionLevelsModel;
use App\Models\TemplateModel;
use App\Models\ThemeModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        SubscriptionLevelsModel::insert([
            ["name" => "Free", "price" => 0, "level" => 1, "features" => json_encode(["Free"])],
            ["name" => "Premium", "price" => 0, "level" => 2, "features" => json_encode(["Premium"])],
            ["name" => "Pro", "price" => 0, "level" => 2, "features" => json_encode(["Pro"])]
        ]);
        TemplateModel::insert([
            [
                'name' => 'Dark Mode',
                'slug' => Str::slug('Dark Mode'),
                'description' => 'A sleek and modern dark theme for better readability at night.',
                'thumbnail' => 'dark-mode-thumbnail.jpg',
                "level_required" => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Light Mode',
                'slug' => Str::slug('Light Mode'),
                'description' => 'A clean and bright theme for a fresh and vibrant look.',
                'thumbnail' => 'light-mode-thumbnail.jpg',
                "level_required" => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Blue Ocean',
                'slug' => Str::slug('Blue Ocean'),
                'description' => 'A calming blue theme inspired by the ocean.',
                'thumbnail' => 'blue-ocean-thumbnail.jpg',
                "level_required" => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
