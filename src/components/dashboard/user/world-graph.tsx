"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", world: 222, city: 150 },
  { date: "2024-04-02", world: 97, city: 180 },
  { date: "2024-04-03", world: 167, city: 120 },
  { date: "2024-04-04", world: 242, city: 260 },
  { date: "2024-04-05", world: 373, city: 290 },
  { date: "2024-04-06", world: 301, city: 340 },
  { date: "2024-04-07", world: 245, city: 180 },
  { date: "2024-04-08", world: 409, city: 320 },
  { date: "2024-04-09", world: 59, city: 110 },
  { date: "2024-04-10", world: 261, city: 190 },
  { date: "2024-04-11", world: 327, city: 350 },
  { date: "2024-04-12", world: 292, city: 210 },
  { date: "2024-04-13", world: 342, city: 380 },
  { date: "2024-04-14", world: 137, city: 220 },
  { date: "2024-04-15", world: 120, city: 170 },
  { date: "2024-04-16", world: 138, city: 190 },
  { date: "2024-04-17", world: 446, city: 360 },
  { date: "2024-04-18", world: 364, city: 410 },
  { date: "2024-04-19", world: 243, city: 180 },
  { date: "2024-04-20", world: 89, city: 150 },
  { date: "2024-04-21", world: 137, city: 200 },
  { date: "2024-04-22", world: 224, city: 170 },
  { date: "2024-04-23", world: 138, city: 230 },
  { date: "2024-04-24", world: 387, city: 290 },
  { date: "2024-04-25", world: 215, city: 250 },
  { date: "2024-04-26", world: 75, city: 130 },
  { date: "2024-04-27", world: 383, city: 420 },
  { date: "2024-04-28", world: 122, city: 180 },
  { date: "2024-04-29", world: 315, city: 240 },
  { date: "2024-04-30", world: 454, city: 380 },
  { date: "2024-05-01", world: 165, city: 220 },
  { date: "2024-05-02", world: 293, city: 310 },
  { date: "2024-05-03", world: 247, city: 190 },
  { date: "2024-05-04", world: 385, city: 420 },
  { date: "2024-05-05", world: 481, city: 390 },
  { date: "2024-05-06", world: 498, city: 520 },
  { date: "2024-05-07", world: 388, city: 300 },
  { date: "2024-05-08", world: 149, city: 210 },
  { date: "2024-05-09", world: 227, city: 180 },
  { date: "2024-05-10", world: 293, city: 330 },
  { date: "2024-05-11", world: 335, city: 270 },
  { date: "2024-05-12", world: 197, city: 240 },
  { date: "2024-05-13", world: 197, city: 160 },
  { date: "2024-05-14", world: 448, city: 490 },
  { date: "2024-05-15", world: 473, city: 380 },
  { date: "2024-05-16", world: 338, city: 400 },
  { date: "2024-05-17", world: 499, city: 420 },
  { date: "2024-05-18", world: 315, city: 350 },
  { date: "2024-05-19", world: 235, city: 180 },
  { date: "2024-05-20", world: 177, city: 230 },
  { date: "2024-05-21", world: 82, city: 140 },
  { date: "2024-05-22", world: 81, city: 120 },
  { date: "2024-05-23", world: 252, city: 290 },
  { date: "2024-05-24", world: 294, city: 220 },
  { date: "2024-05-25", world: 201, city: 250 },
  { date: "2024-05-26", world: 213, city: 170 },
  { date: "2024-05-27", world: 420, city: 460 },
  { date: "2024-05-28", world: 233, city: 190 },
  { date: "2024-05-29", world: 78, city: 130 },
  { date: "2024-05-30", world: 340, city: 280 },
  { date: "2024-05-31", world: 178, city: 230 },
  { date: "2024-06-01", world: 178, city: 200 },
  { date: "2024-06-02", world: 470, city: 410 },
  { date: "2024-06-03", world: 103, city: 160 },
  { date: "2024-06-04", world: 439, city: 380 },
  { date: "2024-06-05", world: 88, city: 140 },
  { date: "2024-06-06", world: 294, city: 250 },
  { date: "2024-06-07", world: 323, city: 370 },
  { date: "2024-06-08", world: 385, city: 320 },
  { date: "2024-06-09", world: 438, city: 480 },
  { date: "2024-06-10", world: 155, city: 200 },
  { date: "2024-06-11", world: 92, city: 150 },
  { date: "2024-06-12", world: 492, city: 420 },
  { date: "2024-06-13", world: 81, city: 130 },
  { date: "2024-06-14", world: 426, city: 380 },
  { date: "2024-06-15", world: 307, city: 350 },
  { date: "2024-06-16", world: 371, city: 310 },
  { date: "2024-06-17", world: 475, city: 520 },
  { date: "2024-06-18", world: 107, city: 170 },
  { date: "2024-06-19", world: 341, city: 290 },
  { date: "2024-06-20", world: 408, city: 450 },
  { date: "2024-06-21", world: 169, city: 210 },
  { date: "2024-06-22", world: 317, city: 270 },
  { date: "2024-06-23", world: 480, city: 530 },
  { date: "2024-06-24", world: 132, city: 180 },
  { date: "2024-06-25", world: 141, city: 190 },
  { date: "2024-06-26", world: 434, city: 380 },
  { date: "2024-06-27", world: 448, city: 490 },
  { date: "2024-06-28", world: 149, city: 200 },
  { date: "2024-06-29", world: 103, city: 160 },
  { date: "2024-06-30", world: 446, city: 400 },
];

const chartConfig = {
  views: {
    label: "Users",
  },
  world: {
    label: "World",
    color: "hsl(var(--primary))",
  },
  city: {
    label: "City",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function WorldGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("world");

  const total = React.useMemo(
    () => ({
      world: chartData.reduce((acc, curr) => acc + curr.world, 0),
      city: chartData.reduce((acc, curr) => acc + curr.city, 0),
    }),
    [],
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Signups</CardTitle>
          <CardDescription>
            An interactive bar chart that shows the number of users registered per day
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
