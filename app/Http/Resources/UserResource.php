<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "id" => $this->id,
            "name" => $this->name,
            "phone" => $this->phone,
            "secondaryPhone" => $this->secondary_phone,
            "whatsAppPhone" => $this->whatsapp_phone,
            "email" => $this->email,
            "accountType" => $this->account_type,
			"emailIsVerified" =>$this->email_verified_at,
            "roleId" => $this->role->first()?->id,
            "role" => $this->role->first()?->name,
            "permissions" => $this->role->first()?->permissions,
            "supplierName" => $this->supplier?->name,
            "supplierType" => $this->supplier?->type,
            "countriesRegistered" => $this->supplier?->countries_registered,
            "countriesInOperation" => $this->supplier?->countries_in_operation,
            "category" => $this->supplier?->category,
            "directors" => $this->supplier?->directors,
            "staff" => $this->supplier?->staff,
            "hasBusinessRegistration" => $this->supplier?->has_business_registration ? true : false,
            "hasBusinessPermit" => $this->supplier?->has_business_permit ? true : false,
            "hasTaxCompliance" => $this->supplier?->has_tax_compliance ? true : false,
            "hasLicense" => $this->supplier?->has_license ? true : false,
            "rating" => $this->supplier?->rating(),
            "ratings" => $this->supplier?->ratings()->count(),
            "updatedAt" => $this->updated_at,
            "createdAt" => $this->created_at,
        ];
    }
}
