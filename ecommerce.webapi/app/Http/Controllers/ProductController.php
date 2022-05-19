<?php

namespace App\Http\Controllers;
use App\Models\Product;

use App\Models\Product as ProductModel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();// Product modelinin içindeli bütün datayı return et demek.
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    // post request
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required',
        //     'category' => 'required', 
        //     'price' => 'required',
        //     'image' => 'binary',
        // ]);
        // return Product::create($request->all()); // post edilen datanın hepsini al

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'image' => 'required',
            'category' => 'required',
        ]);

        $product = new ProductModel([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image' => $request->image,
            'category' => $request->category,
        ]);

        $product->save();

        return response()->json([
            'data' => 'Product created!',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    // yollanan id yi bulmak için
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    // PUT request veriyi değiştirmek için
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     // delete
    public function destroy($id)
    {
        return Product::destroy($id);
    }

    /**
     * search for name
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */

    // delete
    public function search($name)
    {
        return Product::where('name', 'like', '%' .$name. '%')->get();
    }
}
