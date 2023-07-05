<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warehouse;
use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;


class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $warehouse = Warehouse::all();
        return response()->json($warehouse);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWarehouseRequest $request)
    {
        $warehouse = new Warehouse();
       $warehouse->name= $request->name;
       $warehouse->address= $request->address;
       $warehouse->capacity= $request->capacity;
       $warehouse->available_capacity= $request->available_capacity;
       $warehouse->shipping_available= $request->shipping_available;
       $warehouse->service_fee= $request->service_fee;
       $warehouse->earnings= $request->earnings;
       $warehouse->warehouse_type= $request->warehouse_type;
        $warehouse->save();
        return response()->json($warehouse);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $warehouse = Warehouse::findorfail($id);
        return  response()->json($warehouse);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWarehouseRequest $request, $id)
    {
        $warehouse = Warehouse::findorfail($id);
        $warehouse->name= $request->name;
        $warehouse->address= $request->address;
        $warehouse->capacity= $request->capacity;
        $warehouse->available_capacity= $request->available_capacity;
        $warehouse->shipping_available= $request->shipping_available;
        $warehouse->service_fee= $request->service_fee;
        $warehouse->earnings= $request->earnings;
        $warehouse->warehouse_type= $request->warehouse_type;
         $warehouse->save();
         return response()->json($warehouse);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $warehouse = Warehouse::findorfail($id);
        $warehouse->delete();
        return response()->json('deleted successfully');
    }
}
