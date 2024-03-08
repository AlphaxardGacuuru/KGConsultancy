<?php

namespace App\Http\Services;

use App\Http\Resources\SupplierResource;
use App\Http\Services\Service;
use App\Models\Supplier;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class AdminService extends Service
{
    public function index()
    {
        return [
            "suppliers" => $this->suppliers(),
            "bids" => $this->bids(),
            "rfqs" => $this->rfqs(),
            "tenders" => $this->tenders(),
        ];
    }

    /*
     * Get Suppliers Data
     */
    public function suppliers()
    {
        $supplierQuery = User::where("account_type", "supplier");

        $total = $supplierQuery->count();

        $carbonYesterday = now()->subDay();

        $yesterday = $supplierQuery->whereDate("created_at", $carbonYesterday)->count();

        $carbonToday = Carbon::today()->toDateString();

        $today = $supplierQuery->whereDate("created_at", $carbonToday)->count();

        $suppliers = Supplier::orderBy("id", "DESC")->paginate(20);

        $suppliers = SupplierResource::collection($suppliers);

        $byCategory = Supplier::select(DB::raw('category'), DB::raw('count(*) as count'))
            ->groupBy(DB::raw('category'))
            ->get();

        return [
            "total" => $total,
            "growth" => $this->growth($yesterday, $today),
            "list" => $suppliers,
            "byCategory" => $byCategory,
            "byCountryRegistered" => $this->suppliersBy("countries_registered"),
            "byCountryInOperation" => $this->suppliersBy("countries_in_operation"),
            "lastWeek" => $this->suppliersLastWeek(),
            "lastMonth" => $this->suppliersLastMonth(),
        ];
    }

    /*
     * Get Bids Data
     */
    public function bids()
    {
        $bidQuery = User::where("account_type", "bid");

        $total = $bidQuery->count();

        $carbonYesterday = now()->subDay();

        $yesterday = $bidQuery->whereDate("created_at", $carbonYesterday)->count();

        $carbonToday = Carbon::today()->toDateString();

        $today = $bidQuery->whereDate("created_at", $carbonToday)->count();

        // Get Users By Day
        $startDate = Carbon::now()->subWeek()->startOfWeek();
        $endDate = Carbon::now()->subWeek()->endOfWeek();

        $getBidsLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "bid")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(fn($item) => $item->count);

        $bids = $bidQuery->orderBy("id", "DESC")->paginate(20);

        $bids = SupplierResource::collection($bids);

        return [
            "total" => $total,
            "growth" => $this->growth($yesterday, $today),
            "lastWeek" => $getBidsLastWeek,
            "list" => $bids,
            "lastMonth" => $this->bidsLastMonth(),
        ];
    }

    /*
     * Get RFQs Data
     */
    public function rfqs()
    {
        $rfqQuery = User::where("account_type", "rfq");

        $total = $rfqQuery->count();

        $carbonYesterday = now()->subDay();

        $yesterday = $rfqQuery->whereDate("created_at", $carbonYesterday)->count();

        $carbonToday = Carbon::today()->toDateString();

        $today = $rfqQuery->whereDate("created_at", $carbonToday)->count();

        // Get Users By Day
        $startDate = Carbon::now()->subWeek()->startOfWeek();
        $endDate = Carbon::now()->subWeek()->endOfWeek();

        $getRfqsLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "rfq")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(fn($item) => $item->count);

        $rfqs = $rfqQuery->orderBy("id", "DESC")->paginate(20);

        $rfqs = SupplierResource::collection($rfqs);

        return [
            "total" => $total,
            "growth" => $this->growth($yesterday, $today),
            "lastWeek" => $getRfqsLastWeek,
            "list" => $rfqs,
            "lastMonth" => $this->rfqsLastMonth(),
        ];
    }

    /*
     * Get Tender Data
     */
    public function tenders()
    {
        $tendersQuery = User::where("account_type", "tenders");

        $total = $tendersQuery->count();

        $carbonYesterday = now()->subDay();

        $yesterday = $tendersQuery->whereDate("created_at", $carbonYesterday)->count();

        $carbonToday = Carbon::today()->toDateString();

        $today = $tendersQuery->whereDate("created_at", $carbonToday)->count();

        // Get Users By Day
        $startDate = Carbon::now()->subWeek()->startOfWeek();
        $endDate = Carbon::now()->subWeek()->endOfWeek();

        $getUsersLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "bid")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(fn($item) => $item->count);

        $tenders = $tendersQuery->orderBy("id", "DESC")->paginate(20);

        $tenders = SupplierResource::collection($tenders);

        return [
            "total" => $total,
            "growth" => $this->growth($yesterday, $today),
            "lastWeek" => $getUsersLastWeek,
            "list" => $tenders,
            "lastMonth" => $this->tendersLastMonth(),
        ];
    }

    /*
     * Get Suppliers By Country
     */
    public function suppliersBy($field)
    {
        $query = Supplier::all()
            ->pluck($field)
            ->flatten()
            ->countBy();

        $total = $query
            ->values()
            ->reduce(fn($acc, $item) => $acc + $item);

        return $query
            ->map(function ($count, $country) use ($total) {
                $count = $count / $total * 100;

                return [
                    "country" => $country,
                    "count" => number_format($count, 2) . "%",
                ];
            })->values();
    }

    /*
     * Get Suppliers Last Week
     */
    public function suppliersLastWeek()
    {
        // Get Users By Day
        $startDate = Carbon::now()->subWeek()->startOfWeek();
        $endDate = Carbon::now()->subWeek()->endOfWeek();

        $getSuppliersLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "supplier")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(fn($item) => $item->count);
    }

    /*
     * Get Suppliers Last Month
     */
    public function suppliersLastMonth()
    {
        // Get Ordes By Day
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        $getSuppliersLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "supplier")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(function ($item) {
                return [
                    "day" => Carbon::parse($item->date)->day,
                    "count" => $item->count,
                ];
            });

        // Extract the days from your collection
        $existingDays = $getSuppliersLastWeek->pluck('day')->toArray();

        // Get the range of days in the current month (from 1 to the last day of the month)
        $startDay = 1;
        $endDay = now()->endOfMonth()->day;
        $allDays = range($startDay, $endDay);

        // Fill missing days with default count of zero
        $missingDays = array_diff($allDays, $existingDays);
        $missingDaysData = collect($missingDays)->map(function ($day) {
            return [
                "day" => $day,
                "count" => 0,
            ];
        })->toArray();

        // Merge existing data with the missing days filled with default count
        $mergedData = $getSuppliersLastWeek
            ->concat($missingDaysData)
            ->sortBy('day')
            ->values();

        $labels = $mergedData->map(fn($item) => $item["day"]);
        $data = $mergedData->map(fn($item) => $item["count"]);

        return [
            "labels" => $labels,
            "data" => $data,
        ];
    }

    /*
     * Get RFQ Last Month
     */
    public function rfqsLastMonth()
    {
        // Get Ordes By Day
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        $getRfqsLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "rfqs")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(function ($item) {
                return [
                    "day" => Carbon::parse($item->date)->day,
                    "count" => $item->count,
                ];
            });

        // Extract the days from your collection
        $existingDays = $getRfqsLastWeek->pluck('day')->toArray();

        // Get the range of days in the current month (from 1 to the last day of the month)
        $startDay = 1;
        $endDay = now()->endOfMonth()->day;
        $allDays = range($startDay, $endDay);

        // Fill missing days with default count of zero
        $missingDays = array_diff($allDays, $existingDays);
        $missingDaysData = collect($missingDays)->map(function ($day) {
            return [
                "day" => $day,
                "count" => 0,
            ];
        })->toArray();

        // Merge existing data with the missing days filled with default count
        $mergedData = $getRfqsLastWeek
            ->concat($missingDaysData)
            ->sortBy('day')
            ->values();

        $labels = $mergedData->map(fn($item) => $item["day"]);
        $data = $mergedData->map(fn($item) => $item["count"]);

        return [
            "labels" => $labels,
            "data" => $data,
        ];
    }

    /*
     * Get Bid Last Month
     */
    public function bidsLastMonth()
    {
        // Get Ordes By Day
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        $getBidsLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "bids")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(function ($item) {
                return [
                    "day" => Carbon::parse($item->date)->day,
                    "count" => $item->count,
                ];
            });

        // Extract the days from your collection
        $existingDays = $getBidsLastWeek->pluck('day')->toArray();

        // Get the range of days in the current month (from 1 to the last day of the month)
        $startDay = 1;
        $endDay = now()->endOfMonth()->day;
        $allDays = range($startDay, $endDay);

        // Fill missing days with default count of zero
        $missingDays = array_diff($allDays, $existingDays);
        $missingDaysData = collect($missingDays)->map(function ($day) {
            return [
                "day" => $day,
                "count" => 0,
            ];
        })->toArray();

        // Merge existing data with the missing days filled with default count
        $mergedData = $getBidsLastWeek
            ->concat($missingDaysData)
            ->sortBy('day')
            ->values();

        $labels = $mergedData->map(fn($item) => $item["day"]);
        $data = $mergedData->map(fn($item) => $item["count"]);

        return [
            "labels" => $labels,
            "data" => $data,
        ];
    }

    /*
     * Get Tender Last Month
     */
    public function tendersLastMonth()
    {
        // Get Ordes By Day
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        $getTenderLastWeek = User::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->where("account_type", "tender")
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('DATE(users.created_at)'))
            ->get()
            ->map(function ($item) {
                return [
                    "day" => Carbon::parse($item->date)->day,
                    "count" => $item->count,
                ];
            });

        // Extract the days from your collection
        $existingDays = $getTenderLastWeek->pluck('day')->toArray();

        // Get the range of days in the current month (from 1 to the last day of the month)
        $startDay = 1;
        $endDay = now()->endOfMonth()->day;
        $allDays = range($startDay, $endDay);

        // Fill missing days with default count of zero
        $missingDays = array_diff($allDays, $existingDays);
        $missingDaysData = collect($missingDays)->map(function ($day) {
            return [
                "day" => $day,
                "count" => 0,
            ];
        })->toArray();

        // Merge existing data with the missing days filled with default count
        $mergedData = $getTenderLastWeek
            ->concat($missingDaysData)
            ->sortBy('day')
            ->values();

        $labels = $mergedData->map(fn($item) => $item["day"]);
        $data = $mergedData->map(fn($item) => $item["count"]);

        return [
            "labels" => $labels,
            "data" => $data,
        ];
    }

    // Calculate Growth
    public function growth($yesterday, $today)
    {
        // Resolve for Division by Zero
        if ($yesterday == 0) {
            $growth = $today == 0 ? 0 : $today * 100;
        } else if ($today == 0) {
            $growth = $yesterday == 0 ? 0 : $yesterday * -100;
        } else {
            $growth = $today / $yesterday * 100;
        }

        return number_format($growth, 1);
    }
}
