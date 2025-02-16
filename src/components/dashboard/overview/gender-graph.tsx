"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", female: 186, male: 80 },
  { month: "February", female: 305, male: 200 },
  { month: "March", female: 237, male: 120 },
  { month: "April", female: 73, male: 190 },
  { month: "May", female: 209, male: 130 },
  { month: "June", female: 214, male: 140 },
];

const chartConfig = {
  female: {
    label: "Female",
    color: "hsl(330,100%,60%)",
  },
  male: {
    label: "Male",
    color: "hsl(190, 100%, 60%)",
  },
} satisfies ChartConfig;

export function GenderGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gender Distribution</CardTitle>
        <CardDescription>
          Compare the distribution of all users.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="male"
              type="natural"
              fill="var(--color-male)"
              fillOpacity={0.4}
              stroke="var(--color-male)"
              stackId="a"
            />
            <Area
              dataKey="female"
              type="natural"
              fill="var(--color-female)"
              fillOpacity={0.4}
              stroke="var(--color-female)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {/* <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div> */}
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
