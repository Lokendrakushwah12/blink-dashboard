"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, UserCheck, UserMinus, Users } from "lucide-react";
import { useState } from "react";

interface UserMetricsData {
  totalUsers: number;
  activeUsers: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  newSignups: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  retentionRate: {
    oneWeek: number;
    oneMonth: number;
    threeMonths: number;
  };
  churnRate: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  genderRatio: {
    male: number;
    female: number;
    nonBinary: number;
  };
  inactiveUsers: number;
}

const UserMetricData = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "weekly",
  );

  const metricsData: UserMetricsData = {
    totalUsers: 2350,
    activeUsers: {
      daily: 876,
      weekly: 1421,
      monthly: 1987,
    },
    newSignups: {
      daily: 38,
      weekly: 180,
      monthly: 432,
    },
    retentionRate: {
      oneWeek: 78.4,
      oneMonth: 62.5,
      threeMonths: 48.2,
    },
    churnRate: {
      daily: 1.2,
      weekly: 4.8,
      monthly: 8.7,
    },
    genderRatio: {
      male: 1092,
      female: 1158,
      nonBinary: 100,
    },
    inactiveUsers: 363,
  };

  // Calculate percentages for gender ratio
  const totalUserCount =
    metricsData.genderRatio.male +
    metricsData.genderRatio.female +
    metricsData.genderRatio.nonBinary;
  const malePercentage = (
    (metricsData.genderRatio.male / totalUserCount) *
    100
  ).toFixed(1);
  const femalePercentage = (
    (metricsData.genderRatio.female / totalUserCount) *
    100
  ).toFixed(1);
  const nonBinaryPercentage = (
    (metricsData.genderRatio.nonBinary / totalUserCount) *
    100
  ).toFixed(1);

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="mb-2 text-2xl font-bold">User Metrics Dashboard</h2>

      {/* Timeframe selector */}
      <Tabs
        defaultValue="weekly"
        className="w-full"
        onValueChange={(value: string) =>
          setTimeframe(value as "daily" | "weekly" | "monthly")
        }
      >
        <TabsList className="mb-4 bg-transparent border-b rounded-none my-0 w-full flex justify-start items-start">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Main metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-600/20">
              <Users size={16} className="text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metricsData.totalUsers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Active:{" "}
              {(
                metricsData.totalUsers - metricsData.inactiveUsers
              ).toLocaleString()}{" "}
              | Inactive: {metricsData.inactiveUsers.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {timeframe === "daily"
                ? "DAU"
                : timeframe === "weekly"
                  ? "WAU"
                  : "MAU"}
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-600/20">
              <UserCheck size={16} className="text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metricsData.activeUsers[timeframe].toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {(
                (metricsData.activeUsers[timeframe] / metricsData.totalUsers) *
                100
              ).toFixed(1)}
              % of total users
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Signups</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20">
              <Users size={16} className="text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metricsData.newSignups[timeframe].toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +
              {(
                (metricsData.newSignups[timeframe] /
                  (metricsData.totalUsers -
                    metricsData.newSignups[timeframe])) *
                100
              ).toFixed(1)}
              % growth
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600/20">
              <UserMinus size={16} className="text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metricsData.churnRate[timeframe]}%
            </div>
            <p className="text-xs text-muted-foreground">
              {timeframe === "daily"
                ? "Daily"
                : timeframe === "weekly"
                  ? "Weekly"
                  : "Monthly"}{" "}
              average
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Additional metrics */}
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Retention Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">1 Week</span>
                <span className="font-medium">
                  {metricsData.retentionRate.oneWeek}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${metricsData.retentionRate.oneWeek}%` }}
                ></div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm">1 Month</span>
                <span className="font-medium">
                  {metricsData.retentionRate.oneMonth}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${metricsData.retentionRate.oneMonth}%` }}
                ></div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm">3 Months</span>
                <span className="font-medium">
                  {metricsData.retentionRate.threeMonths}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${metricsData.retentionRate.threeMonths}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Gender Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                    Male
                  </span>
                  <span className="font-medium">{malePercentage}%</span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${malePercentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {metricsData.genderRatio.male.toLocaleString()} users
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <div className="mr-2 h-3 w-3 rounded-full bg-pink-500"></div>
                    Female
                  </span>
                  <span className="font-medium">{femalePercentage}%</span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-pink-500"
                    style={{ width: `${femalePercentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {metricsData.genderRatio.female.toLocaleString()} users
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
                    Non-binary
                  </span>
                  <span className="font-medium">{nonBinaryPercentage}%</span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{ width: `${nonBinaryPercentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {metricsData.genderRatio.nonBinary.toLocaleString()} users
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col pt-4 items-center gap-4 justify-center">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity size={32} className="text-blue-600" />
                </div>
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="text-muted"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-blue-600"
                    strokeWidth="10"
                    strokeDasharray={251.2}
                    strokeDashoffset={
                      251.2 -
                      251.2 *
                        (metricsData.activeUsers[timeframe] /
                          metricsData.totalUsers)
                    }
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {(
                    (metricsData.activeUsers[timeframe] /
                      metricsData.totalUsers) *
                    100
                  ).toFixed(1)}
                  %
                </div>
                <p className="text-sm text-muted-foreground">
                  Active User Rate
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserMetricData;
