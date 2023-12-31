<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use App\Models\brands;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cars = Cars::with('Brands')
                    ->where('Available', 1)
                    ->get();
        
        return response()->json($cars);
    }
    public function indexadm()
    {
        $cars = Cars::with('Brands')
                    ->get();
        
        return response()->json($cars);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $Brand = brands::all();
        return $Brand;
    }

    public function store(Request $request)
    {
        $request->validate([
            'Id_Brand_fk' => 'required',
            'Model' => 'required',
            'year' => 'required|numeric|min:0',
            'Colour' => 'required|min:4|max:25',
            'type' => 'required|min:4|max:25',
            'fuel' => 'required',
            'Available' => 'required|min:0',
            'Image' => 'required|mimes:jpeg,png,jpg',
            'Km' => 'required|numeric|min:0',
            'version' => 'required',
            'TM' => 'required',
            'liters' => 'required',
            'price' => 'required|min:0', // Añade validación de tipo de archivo si es necesario
        ]);


        if ($request->hasFile('Image')) {
            // $customFileName = 'mi_archivo_personalizado.' . $request->file('Image')->getClientOriginalExtension();
            $imagePath = $request->file('Image')->store('Images', 'public');

            $auto = Cars::create([
                'Id_Brand_fk' => $request->Id_Brand_fk,
                'Model' => $request->Model,
                'year' => $request->year,
                'Colour' => $request->Colour,
                'type' => $request->type,
                'fuel' => $request->fuel,
                'Available' => $request->Available,
                'Image' => $imagePath,
                'Km' => $request->Km,
                'version' => $request->version,
                'TM' => $request->TM,
                'liters' => $request->liters,
                'price' => $request->price,
                // Guarda la ruta personalizada en lugar del nombre generado automáticamente
            ]);

            // Resto del código de almacenamiento
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Cars $auto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cars $auto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */ public function update(Request $request, $id)
    {
        $car = Cars::find($id);

        if (!$car) {
            return response()->json(['error' => 'Auto no encontrado'], 404);
        }

        $request -> validate([
            'Model'=> 'required',
            'year'=>'required|numeric|min:0',
            'Colour' => 'required|min:4|max:25',
            'Km' => 'required|numeric|min:0',
            'price' => 'required|min:0', 
            'type' => 'required|min:4|max:25',

        ]);
        if ($request->hasFile('Image')) {
            $imagePath = $request->file('Image')->store('Images', 'public');
           
            $car->update([
                'Model' => $request->Model,
                'year' => $request->year,
                'Colour' => $request->Colour,
                'type' => $request->type,
                'Km' => $request->Km,
                'price' => $request->price,
                "Image" => $imagePath,
                "Available"=> $request->Available,
            ]);
        } else {
            

            $car->update([
                'Model' => $request->Model,
                'year' => $request->year,
                'Colour' => $request->Colour,
                'type' => $request->type,
                'Km' => $request->Km,
                'price' => $request->price,
                'Available' =>$request->Available,
            ]);
        }

        return response()->json(['message' => 'Auto actualizado exitosamente', 'data' => $car]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        Cars::destroy($id);
    }

    public function disable(Request $request, $id)
    {
        $car = Cars::find($id);

        if (!$car) {
            return response()->json(['error' => 'Auto no encontrado'], 404);
        }

        if ($request->hasFile('Image')) {
            $imagePath = $request->file('Image')->store('Images', 'public');
        }
        $car->Available = 0; 
        $car->save();

        return response()->json(['message' => 'Auto actualizado exitosamente']);
    }

}
