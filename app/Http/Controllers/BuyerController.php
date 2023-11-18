<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Buyer;

class BuyerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $request->validate([
            'phone_number' => 'required',
            'street' => 'required',
            'House_number' => 'required',
            'name' => 'required',
            'Surname' => 'required',
            'second_surname' => 'required',
            'id_user' => 'required',
        ]);
        $buyer = Buyer::create([
            'phone_number' => $request->phone_number,
            'street' => $request->street,
            'House_number' => $request->House_number,
            'name' => $request->name,
            'Surname' => $request-> Surname,
            'second_surname' => $request-> second_surname,
            'id_user' => $request-> id_user,

        ]);
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Buyer $Buyer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Buyer $Buyer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Buyer $Buyer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Buyer $Buyer)
    {
        //
    }
}
