import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const RegistrationTrend = () => {
  return (
    <Card className="col-span-7">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Registration Trends
        </CardTitle>
        <UserPlus size={16} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex w-full flex-col justify-between space-y-4 md:flex-row">
        <div>
          <p className="text-xs text-muted-foreground">Today</p>
          <div className="flex flex-col items-baseline justify-between">
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs font-medium text-green-500">
              +12% vs yesterday
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">This Week</p>
          <div className="flex flex-col items-baseline justify-between">
            <div className="text-2xl font-bold">1,432</div>
            <p className="text-xs font-medium text-green-500">
              +8% vs last week
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">This Month</p>
          <div className="flex flex-col items-baseline justify-between">
            <div className="text-2xl font-bold">5,847</div>
            <p className="text-xs font-medium text-green-500">
              +15% vs last month
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegistrationTrend;
