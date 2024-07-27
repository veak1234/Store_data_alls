<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function me(Request $request): JsonResponse
    {
        return response()->json([
            'message'       => 'Login success',
            'data'  => $request->user(),
        ]);
    }

    public function destroy(User $request)
    {
        return "Hello World";
        // $validator = Validator::make($request->all(), [
        //     'name'  => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:users,email,'. $request->user()->id,
        //     'profile' => 'required|string'
        // ]);

        // if ($validator->fails()) {
        //     return response()->json($validator->errors());
        // }

        // $user = $request->user();
        // $user->update($request->all());

        // return response()->json([
        //    'message' => 'User updated successfully',
        //     'data' => $user,
        // ]);
    }
}
