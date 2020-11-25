<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email');
            $table->string('phone_no')->nullable();
            $table->string('company_website')->nullable();
            $table->string('companys_biggest_challange')->nullable();
            $table->string('project_brif_introduction');
            $table->integer('min_budget');
            $table->integer('max_budget');
            $table->string('project_brif_filepath')->nullable();
            $table->string('scheduled_call');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
