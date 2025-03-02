"use client";
import DateRangeSelector from "@/components/dashboard/revenue/date-range-selector";
import RevenueCityCard from "@/components/dashboard/revenue/revenue-city-card";
import RevenueCountryCard from "@/components/dashboard/revenue/revenue-country-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RevenuePage = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-600/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold py-4">₹2350</div>
            <p className="text-sm text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <RevenueCountryCard />
        <RevenueCityCard />
      </div>
      <div className="flex w-full flex-col gap-4">
        {/* Date range selection to get the revenue data */}
        <DateRangeSelector />
      </div>
    </div>
  );
};

export default RevenuePage;
