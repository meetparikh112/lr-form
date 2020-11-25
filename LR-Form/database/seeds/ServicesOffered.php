<?php

use Illuminate\Database\Seeder;
use App\Service;

class ServicesOffered extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Services = [
            'Web or Mobile Apps Development',
            'Hire Dedicated Developers',
            'AI/ML Development Services',
            'Custom Software Development',
            'Software Testing and QA',
            'API Development & Integration'
        ];
        foreach ($Services as $Service) {
            $check_service = Service::where('name', $Service)->first();
            if (!$check_service) {
                Service::create(['name' => $Service]);
            }
        }
    }
}
