<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThemesModel extends Model
{
    protected $table = "themes";
    protected $fillable = ["name", "slug", "price", "description", "template","thumbnail"];


    public function invitations()
    {
        return $this->hasMany(InvitationsModel::class, "theme_id");
    }
}
