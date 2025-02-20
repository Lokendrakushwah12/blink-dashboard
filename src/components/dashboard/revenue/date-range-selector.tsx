"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

const DateRangeSelector = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date(),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [revenue, setRevenue] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  type PredefinedRange = {
    label: string;
    days: number;
  };

  const predefinedRanges: PredefinedRange[] = [
    { label: "Last 7 Days", days: 7 },
    { label: "Last 30 Days", days: 30 },
    { label: "Last 90 Days", days: 90 },
    { label: "This Year", days: 365 },
  ];

  const handleRangeSelect = (days: number) => {
    const to = new Date();
    const from = new Date();
    from.setDate(from.getDate() - days);
    setDateRange({ from, to });
  };

  useEffect(() => {
    const fetchRevenue = async () => {
      setLoading(true);
      try {
        const response = await new Promise<number>((resolve) =>
          setTimeout(() => resolve(Math.floor(Math.random() * 5000)), 1000)
        );
        setRevenue(response);
      } catch (error) {
        console.error("Failed to fetch revenue", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRevenue();
  }, [dateRange]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Revenue for Date Range</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {predefinedRanges.map((range) => (
              <Button
                key={range.days}
                variant="outline"
                className="text-xs"
                onClick={() => handleRangeSelect(range.days)}
              >
                {range.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={{
                    from: dateRange.from,
                    to: dateRange.to,
                  }}
                  onSelect={(range) => {
                    setDateRange({
                      from: range?.from || new Date(),
                      to: range?.to || new Date(),
                    });
                    setIsCalendarOpen(false);
                  }}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
            {loading ? (
              <Skeleton className="h-12 mt-1 w-28" />
            ) : (
              <p className="text-5xl font-semibold">₹{revenue?.toLocaleString() || 0}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DateRangeSelector;
