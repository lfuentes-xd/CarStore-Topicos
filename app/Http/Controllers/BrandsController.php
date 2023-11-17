<?php

namespace App\Http\Controllers;

use App\Models\brands;
use Illuminate\Http\Request;

class BrandsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $marca = brands::all();
        return $marca;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'Desc'=>'required|unique:Brands,Desc|max:20'
            ]
            );

        $marca = brands::create([
            'Desc'=> $request->Desc
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(brands $marca)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(brands $marca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, brands $marca)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        brands::destroy($id);
    }
}
