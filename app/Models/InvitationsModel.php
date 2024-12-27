<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvitationsModel extends Model
{
    protected $table = "invitations";
    protected $fillable = ["theme_id", "user_id", "map_address", "date_of_event"];


    public function theme()
    {
        return $this->belongsTo(ThemesModel::class, "theme_id");
    }
    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}
