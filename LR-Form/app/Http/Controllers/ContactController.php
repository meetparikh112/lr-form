<?php

namespace App\Http\Controllers;

use App\Contact;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Service;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    private $status_code = 200;



    /**
     * @author : ### ###
     *
     * Method name: contactFormIndex
     * This method is used to get data of services.
     *
     * @return sevices data,status,message.
     * @exception throw if any error occur when redeeming the coupen from this API.
     */
    public function contactFormIndex(Request $request)
    {
        $result = DB::transaction(function () use ($request) {
            try {
                $sevices = Service::all();
                if (!is_null($sevices)) {
                    return response()->json(["status" => $this->status_code, "success" => true, "message" => "", "data" => $sevices]);
                } else {
                    return response()->json(["status" => "failed", "success" => false, "message" => "something Went Wrong."]);
                }
            } catch (Exception $ex) {
                throw new Exception($ex);
            }
        });
        return $result;
    }

    /**
     * @author : ### ###
     *
     * Method name: contactFormCreate
     * This method is used for submitting contact form.
     *
     * @param  {string} name - The name of client.
     * @param  {string} email - The email of client.
     * @param  {string} phone_no - The phone no of client.
     * @param  {string} company_website - The website name of client.
     * @param  {string} companys_biggest_challange - The clients biggest challange.
     * @param  {string} project_brif_introduction - The clients product introduction.
     * @param  {integer} min_budget - The projects minimum budget.
     * @param  {integer} max_budget - The projects maximum budget.
     * @param  {string} project_brif_filepath - The project relevent file path.
     * @param  {string} scheduled_call - The scheduled date and time.
     * 
     *
     * @return contact  data,status,message..
     * @exception throw if any error occur when redeeming the coupen from this API.
     */
    public function contactFormCreate(Request $request)
    {
        $result = DB::transaction(function () use ($request) {
            try {
                $input = $request->all();
                Log::info($input);
                $validator = Validator::make($input, [
                    "name" => "required",
                    "email" => "required|email",
                    "phone_no" => "",
                    "company_website" => "",
                    "companys_biggest_challange" => "",
                    "project_brif_introduction" => "required",
                    "min_budget" => "required|numeric",
                    "max_budget" => "required|numeric",
                    "project_brif_filepath" => "",
                    "scheduled_call" => "required",
                ]);

                if ($validator->fails()) {
                    return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
                }
                $userDataArray = array(
                    "name" => $input['name'],
                    "email" => $input['email'],
                    "phone_no" => $input['phone_no'],
                    "company_website" => $input['company_website'],
                    "companys_biggest_challange" => $input['companys_biggest_challange'],
                    "project_brif_introduction" => $input['project_brif_introduction'],
                    "min_budget" => $input['min_budget'],
                    "max_budget" => $input['max_budget'],
                    "project_brif_filepath" => $input['project_brif_filepath'],
                    "scheduled_call" => $input['scheduled_call'],
                );

                $user = Contact::create($userDataArray);
                if (!is_null($user)) {
                    return response()->json(["status" => $this->status_code, "success" => true, "message" => "Form submitted successfully", "data" => $user]);
                } else {
                    return response()->json(["status" => "failed", "success" => false, "message" => "failed to submit. Try again."]);
                }
            } catch (Exception $ex) {
                throw new Exception($ex);
            }
        });
        return $result;
    }
}
