<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Stripe;
class StripePaymentController extends Controller
{

    public function stripePost(Request $request)
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
     
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $res =  $stripe->charges->create([
            'amount' => $request->amount,
            'currency' => 'usd',
            'source' =>'tok_visa',
            'description' => $request->description,
        ]);

     
        return response()->json([$res->status], 201);
    }
}
