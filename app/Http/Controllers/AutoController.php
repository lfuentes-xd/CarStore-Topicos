<?php

namespace App\Http\Controllers;

use App\Models\Auto;
use App\Models\Marca;
use Illuminate\Http\Request;

class AutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Auto = Auto::all();
        return $Auto;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $Brand = Marca::all();
        return $Brand;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request){
        $request->validate([
            // 'Id_marca_fk' => 'required',
            'Modelo' => 'required',
            'año' => 'required',
            'Color' => 'required',
            'Carroceria' => 'required',
            't_combustible' => 'required',
            'Existencias' => 'required',
            // 'Image' => 'required|mimes:jpeg,png,jpg',
        ]);

        // $imageName = time() . '.' . $request->Image->extension();
        // $request->Image->move(public_path('images'), $imageName);

        $auto = Auto::create([
            // 'Id_marca_fk' => $request->Id_marca_fk,
            'Id_marca_fk' => "1",
            'Modelo' => $request->Modelo,
            'año' => $request->año,
            'Color' => $request->Color,
            'Carroceria' => $request->Carroceria,
            't_combustible' => $request->t_combustible,
            'Existencias' => $request->Existencias,
            'Image'=> 'prueba'
            // 'Image' =>  $imageName
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Auto $auto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Auto $auto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Auto $auto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Auto $auto)
    {
        //
    }

    public function token(){
        return csrf_token();
    }
}
