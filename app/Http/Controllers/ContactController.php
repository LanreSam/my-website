<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendMail(Request $request)
    {
        //validates user inputs in all the field provided in the contact form
        $validatedata = $request->validate([
            'name' => 'required|min:3|max:30',
            'email' => 'required',
            'phone' => 'required',
            'message' => 'required'
        ]);

        //gets all the user information entered in the contact form
        $details = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
        ];
        //gets the user email only
        $email = ['email' => $request->email];

        //message to be sent to the user's email
        $msg = "We have successfully recieved your mail and will reply you shortly";
        //this sends the user message to the site's mail
        Mail::to('ezechilanre@gmail.com')->send(new ContactMail($details));
        //this sends a feedback reply to the user's email
        //Mail::to($email)->send(new feedbackMail($msg));

        return back()->with('mail-msg', "Mail sent successfully. I will reply you shortly.");
    }
}
