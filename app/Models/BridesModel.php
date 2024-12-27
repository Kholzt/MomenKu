<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BridesModel extends Model
{

    protected $table = "brides";
    protected $fillable = ["invitation_id", "fullname", "type", "nickname", "name_of_father", "name_of_mother", "order"];


    public function invitations()
    {
        return $this->belongsTo(InvitationsModel::class, "invitation_id");
    }
}
