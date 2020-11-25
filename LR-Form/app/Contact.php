<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone_no',
        'company_website',
        'companys_biggest_challange',
        'project_brif_introduction',
        'min_budget',
        'max_budget',
        'project_brif_filepath',
        'scheduled_call',
    ];
}
