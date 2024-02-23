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
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('name');
            $table->jsonb('countries_registered')->nullable();
            $table->jsonb('countries_in_operation')->nullable();
            $table->string('type')->nullable();
            $table->string('category')->nullable();
            $table->jsonb('directors')->nullable();
            $table->integer('staff')->nullable();
            $table->boolean('has_business_registration')->default(false);
            $table->boolean('has_business_permit')->default(false);
            $table->boolean('has_tax_compliance')->default(false);
            $table->boolean('has_license')->default(false);
            $table->timestamps();

            // Name of company
            // Country Registered - open field to type in many countries
            // Country in operation - open field to type in many countries
            // Type of company (Women owned, Disability, General )
            // Category (services, goods, works, consultancy)

            // Supplier Name
            // Mobile No.
            // WhatsApp No.
            // Email:
            // Secondary Tel No.

            // Directors full names - open field to type in many directors
            // No of staff
            // Preliminary evaluation
            // Confirm you have the following documents
            // Business registration - box to tick
            // Business/Trading permit - box to tick
            // Tax compliance certificate - box to tick
            // Licence relevant to body - box to tick
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suppliers');
    }
};
