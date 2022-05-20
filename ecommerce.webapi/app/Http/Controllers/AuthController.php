<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register(Request $request){
        // $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $out->writeln($request);
        // echo($request);
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
            'isAdmin' => 'boolean|integer',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'isAdmin' => $fields['isAdmin'],
        ]);
        // dump($user);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request){

        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        // check email
        $user = User::where('email', $fields['email'])->first();

        // check password
        if(!$user || !Hash::check($fields['password'], $user->password)){
            return response([
                'message' => 'Incorrect Email or password'
            ], 401);
        }


        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }

    public function index(){
        $users = DB::table('users')->get();
        return $users;
    }

    public function updateUser(Request $request,$id){
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $isAdmin = $request->input('isAdmin');


        DB::update('update users set name = ?, email = ?, password = ?, isAdmin = ? where id = ?'
        ,[$name, $email, $password, $isAdmin, $id]);

        // $user = DB::select('select * from users where id = ?', [$id]);
        $user = DB::select('select * from users where id = ?', [$id]);
        return $user;
    }

    public function updateAdminStatus(Request $request,$id){ 
        $isAdmin = $request->input('isAdmin');
        DB::update('update users set isAdmin = ? where id = ?',[$isAdmin, $id]);
        return response(201);
    }

    public function getSingleUser($id){
        $user = DB::select('select * from users where id = ?', [$id]);
        return $user;
    }

}
