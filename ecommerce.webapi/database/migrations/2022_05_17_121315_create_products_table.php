<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->string('description');
            $table->decimal('price', 5, 2);
            $table->string('image');
            $table->timestamps();
        });

        // Create one example product for every category
        DB::table('products')->insert(array(
            'name' => 'Best Sellers Title Example',
            'description' => 'Best Sellers Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Best Sellers',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Biographies Title Example',
            'description' => 'BeBiographies Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Biographies',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Memories Title Example',
            'description' => 'Memories Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Memories',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'History Title Example',
            'description' => 'History Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'History',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Fiction Title Example',
            'description' => 'Fiction Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Fiction',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Math Title Example',
            'description' => 'Math Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Math',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Science Title Example',
            'description' => 'Science Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Science',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Teen & Young Title Example',
            'description' => 'Teen & Young Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Teen & Young',
            'price' => '24'
        ));

        DB::table('products')->insert(array(
            'name' => 'Sci-Fi Title Example',
            'description' => 'Sci-Fi Description Example',
            'image' => 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            'category' => 'Sci-Fi',
            'price' => '24'
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
