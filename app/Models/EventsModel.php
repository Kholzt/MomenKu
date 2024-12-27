<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventsModel extends Model
{
    protected $table = "events";
    protected $fillable = ["invitation_id", "date_of_event", "early_event_time", "final_event_time", "address", "type"];


    public function invitations()
    {
        return $this->belongsTo(InvitationsModel::class, "invitation_id");
    }
}
