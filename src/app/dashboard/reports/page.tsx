import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, UserX, Clock, CheckCircle } from "lucide-react";
import ReportsTable from "@/components/dashboard/reports/reports-table";

const ReportPage = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600/20">
              <AlertCircle className="h-4 w-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Review
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-yellow-600/20">
              <Clock className="h-4 w-4 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">8 urgent cases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Accounts Suspended
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-600/20">
              <UserX className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cases Resolved
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-600/20">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">356</div>
            <p className="text-xs text-muted-foreground">92% resolution rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h1 className="text-2xl font-bold">Recent Reports</h1>
        <ReportsTable />
      </div>
    </div>
  );
};

export default ReportPage;
