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
            'Brand' => 'required',
            'Model' => 'required',
            'year' => 'required',
            'color' => 'required',
            'type' => 'required',
            'fuel' => 'required',
            'available' => 'required',
            // 'image' => 'required|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        $auto = Auto::create([
            'Id_marca_fk' => $request->Brand,
            'Modelo' => $request->Model,
            'año' => $request->year,
            'Color' => $request->color,
            'Carroceria' => $request->type,
            't_combustible' => $request->fuel,
            'Existencias' => $request->available,
            'Image' => '/images/' . $imageName
        ]);

        return back()
            ->with('success', 'Auto registrado exitosamente.');
            // ->with('image', $imageName);
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
