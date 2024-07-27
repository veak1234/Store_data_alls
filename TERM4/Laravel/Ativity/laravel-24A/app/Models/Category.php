<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name', 'description'];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
    public static function list(){
        return self::orderByDesc('id')->get();
    }
    public static function store($request, $id = null){
        $data = $request->only('name', 'description');
        $data = self::updateOrCreate(['id' => $id], $data);
        return $data;
    }
}
