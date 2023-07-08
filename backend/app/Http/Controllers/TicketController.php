<?php

namespace App\Http\Controllers;
use App\Models\Ticket;

use Illuminate\Http\Request;
use App\Http\Requests\TicketRequest;
class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ticket = Ticket::all();
        return response()->json($ticket);
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
    public function store(TicketRequest $request)
    {
        $ticket= new Ticket();
        $ticket->from=$request->from;
        $ticket->to= $request->to;
        $ticket->state= $request->state;
        $ticket->purpose= $request->purpose;
        $ticket->save();
        return response()->json($ticket);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ticket=Ticket::findorfail($id);
        return response()->json($ticket);
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
    public function update(TicketRequest $request, $id)
    {
        $ticket= Ticket::findorfail($id);
        $ticket->from=$request->from;
        $ticket->to=$request->to;
        $ticket->state=$request->state;
        $ticket->purpose=$request->purpose;
        return response()->json($ticket);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ticket = Ticket::findorfail($id);
        $ticket->delete();
        return response()->json('deleted successfully');
    }
}
