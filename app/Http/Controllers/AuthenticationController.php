<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash; 

class AuthenticationController extends Controller
{
    //
    public function register (Request $request){
        $request->validate([
            'name'=>'required|max:255',
            'email'=>'required|unique:users|max:255',
            'password'=>'required|min:8',
            'password_confirmation'=>'same:password|required'

        ]);
        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=> Hash::make($request->password)
        ]);

        $token=$user->createToken('auth_token')->accessToken;
        return response([
            'token'=> $token
        ]);
    }
    public function login_user (Request $request){
        $request->validate([
            'email'=>'required',
            'password'=>'required'

        ]);

        $user=User::where('email', $request->email)->first();

        if(!$user|| !Hash::check($request->password, $user->password)){
            return response([
                'message'=>'The provided credential are incorrect'
                
            ]);
        }
        $token=$user->createToken('auth_token')->accessToken;   

        return response([
            'token'=> $token
        ]);
    }
    public function logout (Request $request){
        $request->user()->token()->revoke();

        return response([
            'message'=>'logged out sucesfully'
        ]);
    }
    public function store(Request $request)
    {
    $user = $request->user(); // Obtiene el usuario autenticado

    // Puedes personalizar los datos que deseas devolver
    return response([
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
    ]);
    }
    public function user_index()
    {
        $users = DB::table('users')->get();
        return $users;
    }
}
