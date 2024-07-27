<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * @OA\Post(
 *     path="/api/home",
 *     summary="Home data",
 *     description="",
 *     tags={"Home"},
 *     @OA\Parameter(
 *         name="name",
 *         in="query",
 *         description="Provide your name",
 *         required=true,
 *         @OA\Schema(
 *             type="string"
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="OK",
 *         @OA\MediaType(
 *             mediaType="application/json",
 *          )
 *     ),
 * )
 */
class HomeController extends Controller
{
    //
    public function index(Request $request)
    {
        // $name = $request->input('name');
        return response()->json([
            'name' => $request->input('name'),
            'message' => 'Hello world!',
        ]);
    }
}
