<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $table = "comments";
    protected $fillable = ["invitation_id", "fullname", "comments"];


    public function invitations()
    {
        return $this->belongsTo(InvitationsModel::class, "invitation_id");
    }
}
