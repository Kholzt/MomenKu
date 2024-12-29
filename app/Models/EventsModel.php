<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventsModel extends Model
{
    protected $table = "events";
    protected $fillable = ["invitation_id", "event_name", "event_date", "start_time", "end_time", "address", "is_primary"];


    public function invitations()
    {
        return $this->belongsTo(InvitationsModel::class, "invitation_id");
    }
}
