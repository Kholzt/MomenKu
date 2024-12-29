<?php

namespace Database\Seeders;

use App\Models\CategoriesModel;
use App\Models\SubscriptionLevelsModel;
use App\Models\TemplateModel;
use App\Models\ThemeModel;
use App\Models\ThemesModel;
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
        $categories = [
            ['name' => 'Wedding', 'slug' => Str::slug('Wedding')],
            ['name' => 'Birthday', 'slug' => Str::slug('Birthday')],
            ['name' => 'Graduation', 'slug' => Str::slug('Graduation')],
            ['name' => 'Baby Shower', 'slug' => Str::slug('Baby Shower')],
            ['name' => 'Corporate Event', 'slug' => Str::slug('Corporate Event')],
            ['name' => 'Anniversary', 'slug' => Str::slug('Anniversary')],
        ];

        CategoriesModel::insert($categories);


        ThemesModel::insert([
            [
                'name' => 'Dark Mode',
                'slug' => Str::slug('Dark Mode'),
                'description' => 'A sleek and modern dark theme for better readability at night.',
                'thumbnail' => 'https://demo.datengdong.com/themes/two/thumb.png',
                "price" => 50000,
                "category_id" => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Light Mode',
                'slug' => Str::slug('Light Mode'),
                'description' => 'A clean and bright theme for a fresh and vibrant look.',
                'thumbnail' => 'https://demo.datengdong.com/themes/seven/thumb.png',
                "price" => 50000,
                "category_id" => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Blue Ocean',
                'slug' => Str::slug('Blue Ocean'),
                'description' => 'A calming blue theme inspired by the ocean.',
                'thumbnail' => 'https://demo.datengdong.com/themes/six/thumb.png',
                "price" => 50000,
                "category_id" => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nature Green',
                'slug' => Str::slug('Nature Green'),
                'description' => 'A refreshing green theme inspired by nature.',
                'thumbnail' => 'https://demo.datengdong.com/themes/five/thumb.png',
                "price" => 50000,
                "category_id" => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sunset Glow',
                'slug' => Str::slug('Sunset Glow'),
                'description' => 'A warm and inviting theme with sunset hues.',
                'thumbnail' => 'https://demo.datengdong.com/themes/four/thumb.png',
                "price" => 50000,
                "category_id" => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Minimalist White',
                'slug' => Str::slug('Minimalist White'),
                'description' => 'A minimalist white theme for simplicity and clarity.',
                'thumbnail' => 'https://demo.datengdong.com/themes/three/thumb.png',
                "price" => 50000,
                "category_id" => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Classic Black',
                'slug' => Str::slug('Classic Black'),
                'description' => 'A timeless black theme for a professional look.',
                'thumbnail' => 'https://demo.datengdong.com/themes/one/thumb.png',
                "price" => 50000,
                "category_id" => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Solar Eclipse',
                'slug' => Str::slug('Solar Eclipse'),
                'description' => 'A dramatic theme with deep tones and bright highlights.',
                'thumbnail' => 'https://demo.datengdong.com/themes/two/thumb.png',
                "price" => 50000,
                "category_id" => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
