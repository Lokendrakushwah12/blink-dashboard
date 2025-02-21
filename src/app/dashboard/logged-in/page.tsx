import BlinkStaffTable from "@/components/dashboard/logged-in/blink-staff-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, LogIn, LogOut } from "lucide-react";

const LoggedInPage = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4">
      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">Company-wide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Currently Logged In
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-600/20">
              <LogIn className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">
              Active staff members
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offline</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600/20">
              <LogOut className="h-4 w-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82</div>
            <p className="text-xs text-muted-foreground">
              Currently unavailable
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-full flex-col gap-4">
        <BlinkStaffTable />
      </div>
    </div>
  );
};

export default LoggedInPage;
