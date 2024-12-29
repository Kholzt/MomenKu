<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BridesModel extends Model
{

    protected $table = "brides";
    protected $fillable = ["invitation_id", "full_name", "type", "nickname", "father_name", "mother_name", "order"];


    public function invitations()
    {
        return $this->belongsTo(InvitationsModel::class, "invitation_id");
    }
}
