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
    // public function store(Request $request){
    //     $request->validate([
    //         'Id_marca_fk' => 'required',
    //         'Modelo' => 'required',
    //         'año' => 'required',
    //         'Color' => 'required',
    //         'Carroceria' => 'required',
    //         't_combustible' => 'required',
    //         'Existencias' => 'required',
    //         // 'Image' => 'required|mimes:jpeg,png,jpg',
    //     ]);

    //     $imageName = time() . '.' . $request->Image->extension();
    //     $request->Image->move(public_path('images'), $imageName);

    //     $auto = Auto::create([
    //         'Id_marca_fk' => $request->Id_marca_fk,
    //         'Modelo' => $request->Modelo,
    //         'año' => $request->año,
    //         'Color' => $request->Color,
    //         'Carroceria' => $request->Carroceria,
    //         't_combustible' => $request->t_combustible,
    //         'Existencias' => $request->Existencias,
    //         // 'Image'=> 'prueba',
    //         'Image' =>  $imageName
    //     ]);
    // }
    public function store(Request $request){
        $request->validate([
            'Id_marca_fk' => 'required',
            'Modelo' => 'required',
            'año' => 'required',
            'Color' => 'required',
            'Carroceria' => 'required',
            't_combustible' => 'required',
            'Existencias' => 'required',
            'Image' => 'required|mimes:jpeg,png,jpg',
            'Km'=>'required',
            'version'=>'required',
            'TM'=>'required',
            'liters'=>'required',
            'price'=> 'required', // Añade validación de tipo de archivo si es necesario
        ]);

        if ($request->hasFile('Image')) {
            // $customFileName = 'mi_archivo_personalizado.' . $request->file('Image')->getClientOriginalExtension();
            $imagePath = $request->file('Image')->store('Images', 'public');

            $auto = Auto::create([
                'Id_marca_fk' => $request->Id_marca_fk,
                'Modelo' => $request->Modelo,
                'año' => $request->año,
                'Color' => $request->Color,
                'Carroceria' => $request->Carroceria,
                't_combustible' => $request->t_combustible,
                'Existencias' => $request->Existencias,
                'Image' => $imagePath,
                'Km'=>$request->Km,
                'version'=>$request->version,
                'TM'=>$request->TM,
                 'liters'=>$request->liters,
                 'price'=>$request->price,
                 // Guarda la ruta personalizada en lugar del nombre generado automáticamente
            ]);

            // Resto del código de almacenamiento
        }

        // Manejar cualquier validación adicional o respuestas de error aquí

        // Redireccionar o devolver una respuesta según sea necesario
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
     */public function update(Request $request, String $id)
{
    // Validar la solicitud
    // $request->validate([
    //     'Modelo' => 'required',
    //     'año' => 'required',
    //     'Color' => 'required',
    //     'Carroceria' => 'required',
    // ]);

    $car = Auto::find($id);

    if (!$car) {
        return response()->json(['error' => 'Auto no encontrado'], 404);
    }

    $car->update([
        'Modelo' => $request->Modelo,
        'año' => $request->año,
        'Color' => $request->Color,
        'Carroceria' => $request->Carroceria,
    ]);

    return response()->json(['message' => 'Auto actualizado exitosamente', 'data' => $car]);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        Auto::destroy($id);
    }

    public function token(){
        return csrf_token();
    }
}
