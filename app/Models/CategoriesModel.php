<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriesModel extends Model
{
    protected $table = "categories";
    protected $fillable = ["name", "slug"];


    public function themes()
    {
        return $this->hasMany(ThemesModel::class, "category_id");
    }
}
