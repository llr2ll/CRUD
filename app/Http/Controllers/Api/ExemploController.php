<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exemplo;
use Illuminate\Http\Request;
use App\Http\Resources\ExemploResource;
use App\Http\Requests\ExemploRequest;

class ExemploController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ExemploResource::collection(Exemplo::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExemploRequest $request)
    {
        $exemplo = Exemplo::create($request->validated()); 
        return new ExemploResource($exemplo);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exemplo  $exemplo
     * @return \Illuminate\Http\Response
     */
    public function show(Exemplo $exemplo)
    {
        return new ExemploResource($exemplo); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Exemplo  $exemplo
     * @return \Illuminate\Http\Response
     */
    public function update(ExemploRequest $request, Exemplo $exemplo)
    {
        $exemplo->update($request->validated()); 
        return new ExemploResource($exemplo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exemplo  $exemplo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exemplo $exemplo)
    {
        $exemplo->delete(); 
        return response()->noContent();
    }
}
