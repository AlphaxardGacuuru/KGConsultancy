<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SupplierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->user->id,
            "name" => $this->user->name,
            "phone" => $this->user->phone,
            "secondaryPhone" => $this->user->secondary_phone,
            "whatsAppPhone" => $this->user->whatsapp_phone,
            "email" => $this->user->email,
            "accountType" => $this->user->account_type,
            "supplierName" => $this->name,
            "supplierType" => $this->type,
            "countriesRegistered" => $this->countries_registered,
            "countriesInOperation" => $this->countries_in_operation,
            "category" => $this->category,
            "directors" => $this->directors,
            "staff" => $this->staff,
            "hasBusinessRegistration" => $this->has_business_registration,
            "hasBusinessPermit" => $this->has_business_permit,
            "hasTaxCompliance" => $this->has_tax_compliance,
            "hasLicense" => $this->has_license,
            "updatedAt" => $this->updated_at,
            "createdAt" => $this->created_at,
        ];
    }
}
