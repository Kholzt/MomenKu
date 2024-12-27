<?php

namespace Database\Seeders;

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


        ThemesModel::insert([
            [
                'name' => 'Dark Mode',
                'slug' => Str::slug('Dark Mode'),
                'description' => 'A sleek and modern dark theme for better readability at night.',
                'thumbnail' => 'dark-mode-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Light Mode',
                'slug' => Str::slug('Light Mode'),
                'description' => 'A clean and bright theme for a fresh and vibrant look.',
                'thumbnail' => 'light-mode-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Blue Ocean',
                'slug' => Str::slug('Blue Ocean'),
                'description' => 'A calming blue theme inspired by the ocean.',
                'thumbnail' => 'blue-ocean-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nature Green',
                'slug' => Str::slug('Nature Green'),
                'description' => 'A refreshing green theme inspired by nature.',
                'thumbnail' => 'nature-green-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sunset Glow',
                'slug' => Str::slug('Sunset Glow'),
                'description' => 'A warm and inviting theme with sunset hues.',
                'thumbnail' => 'sunset-glow-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Minimalist White',
                'slug' => Str::slug('Minimalist White'),
                'description' => 'A minimalist white theme for simplicity and clarity.',
                'thumbnail' => 'minimalist-white-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Classic Black',
                'slug' => Str::slug('Classic Black'),
                'description' => 'A timeless black theme for a professional look.',
                'thumbnail' => 'classic-black-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Solar Eclipse',
                'slug' => Str::slug('Solar Eclipse'),
                'description' => 'A dramatic theme with deep tones and bright highlights.',
                'thumbnail' => 'solar-eclipse-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Golden Hour',
                'slug' => Str::slug('Golden Hour'),
                'description' => 'A luxurious golden theme for a premium feel.',
                'thumbnail' => 'golden-hour-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Retro Vibes',
                'slug' => Str::slug('Retro Vibes'),
                'description' => 'A nostalgic theme with retro colors and patterns.',
                'thumbnail' => 'retro-vibes-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lavender Dreams',
                'slug' => Str::slug('Lavender Dreams'),
                'description' => 'A soothing purple theme for a relaxing experience.',
                'thumbnail' => 'lavender-dreams-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Fiery Red',
                'slug' => Str::slug('Fiery Red'),
                'description' => 'A bold and energetic red theme.',
                'thumbnail' => 'fiery-red-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pastel Paradise',
                'slug' => Str::slug('Pastel Paradise'),
                'description' => 'A soft and cheerful pastel theme.',
                'thumbnail' => 'pastel-paradise-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Urban Night',
                'slug' => Str::slug('Urban Night'),
                'description' => 'A vibrant and modern theme inspired by cityscapes at night.',
                'thumbnail' => 'urban-night-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Royal Purple',
                'slug' => Str::slug('Royal Purple'),
                'description' => 'A regal theme with rich purple tones.',
                'thumbnail' => 'royal-purple-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cherry Blossom',
                'slug' => Str::slug('Cherry Blossom'),
                'description' => 'A delicate pink theme inspired by cherry blossoms.',
                'thumbnail' => 'cherry-blossom-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tech Gray',
                'slug' => Str::slug('Tech Gray'),
                'description' => 'A sleek gray theme for a tech-savvy look.',
                'thumbnail' => 'tech-gray-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Forest Whisper',
                'slug' => Str::slug('Forest Whisper'),
                'description' => 'A tranquil green theme inspired by the forest.',
                'thumbnail' => 'forest-whisper-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Amber Glow',
                'slug' => Str::slug('Amber Glow'),
                'description' => 'A warm amber theme for a cozy feel.',
                'thumbnail' => 'amber-glow-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Galaxy Sparkle',
                'slug' => Str::slug('Galaxy Sparkle'),
                'description' => 'A cosmic theme with shimmering stars.',
                'thumbnail' => 'galaxy-sparkle-thumbnail.jpg',
                "price" => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
