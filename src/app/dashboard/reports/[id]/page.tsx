"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Report {
  id: number;
  title: string;
  description: string;
  reporteeUserName: string;
  reporteeUserEmail: string;
  reportedUserName: string;
  reportedUserEmail: string;
  status: "active" | "suspended" | "blacklisted";
  reportedAt: string;
  reason: string;
  evidenceUrl?: string;
}

const ReportDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  const report: Report = {
    id: Number(id),
    title: "Inappropriate Behavior",
    description: "User was reported for inappropriate behavior in a chatroom.",
    reporteeUserName: "Mike De",
    reporteeUserEmail: "Mikede@gmail.com",
    reportedUserName: "Jane Jenny",
    reportedUserEmail: "Janejenny@gmail.com",
    status: "active",
    reportedAt: "2025-02-20 14:30 UTC",
    reason: "Use of offensive language in a video call",
    evidenceUrl:
      "https://images.unsplash.com/photo-1643272698018-96b761c85015?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const getStatusColor = (status: Report["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-600/10 text-green-600";
      case "suspended":
        return "bg-yellow-600/10 text-yellow-600";
      case "blacklisted":
        return "bg-rose-600/10 text-rose-600";
      default:
        return "bg-gray-600/10 text-gray-600";
    }
  };

  return (
    <div className="mx-auto w-full space-y-6 px-4">
      <Button
        variant="secondary"
        className="flex items-center gap-2 bg-transparent p-0 hover:bg-transparent hover:underline"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} />
        Back to Reports
      </Button>

      <Card className="border-0">
        <CardHeader>
          <CardTitle>{report.title}</CardTitle>
          <CardDescription>{report.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Reportee</p>
              <p className="font-medium text-xl">{report.reporteeUserName}</p>
              <p className="text-sm text-muted-foreground">
                {report.reporteeUserEmail}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Reported</p>
              <p className="font-medium text-xl">{report.reportedUserName}</p>
              <p className="text-sm text-muted-foreground">
                {report.reportedUserEmail}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Reported At</p>
            <p className="font-medium text-xl">{report.reportedAt}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Reason for Reporting
            </p>
            <p className="font-medium text-xl">{report.reason}</p>
          </div>

          {report.evidenceUrl && (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Evidence</p>
              <Image
                src={report.evidenceUrl}
                alt="Evidence"
                width={1000}
                height={1000}
                className="h-[500px] w-full rounded-lg object-cover"
              />
            </div>
          )}

          <Badge className={getStatusColor(report.status)}>
            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
          </Badge>

          <div className="mt-4 flex gap-4">
            <Button variant="destructive">Blacklist</Button>
            <Button variant="warning">Suspend</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportDetails;
