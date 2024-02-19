<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        if(!$products) {
            return resposnse()->json([
                'message' => 'No data found in database'
            ]);
        } else {
            return response()->json([
                'products' => $products
            ]);
        }
    }
    public function store(ProductRequest $request)
    {
        $data = $request->validated();
        if(!$data) {
            return response()->json([
                'message' => 'Invalid Data'
            ]);
        } else {
            $products = Product::create([
                'item_code' => $data['item_code'],
                'description' => $data['description'],
                'quantity' => $data['quantity'],
                'price' => $data['price'],
            ]);
            return response()->json([
                'products' => $products
            ]);
        }

    }
}
