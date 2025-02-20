"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Sample data structure
type Report = {
  id: string;
  user: string;
  reason: string;
  date: string;
  status: "Pending" | "Resolved" | "Under Review";
  severity: "High" | "Medium" | "Low";
};

const reports: Report[] = [
  {
    id: "RPT-2024001",
    user: "user_1",
    reason: "Inappropriate content",
    date: "Feb 20, 2024",
    status: "Pending",
    severity: "High",
  },
  {
    id: "RPT-2024002",
    user: "user_2",
    reason: "Spam behavior",
    date: "Feb 21, 2024",
    status: "Under Review",
    severity: "Medium",
  },
  {
    id: "RPT-2024003",
    user: "user_3",
    reason: "Harassment",
    date: "Feb 22, 2024",
    status: "Resolved",
    severity: "High",
  },
];

const getStatusColor = (status: Report["status"]) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-600/20 text-yellow-600";
    case "Resolved":
      return "bg-green-600/20 text-green-600";
    case "Under Review":
      return "bg-blue-600/20 text-blue-600";
    default:
      return "bg-gray-600/20 text-gray-600";
  }
};

const getSeverityColor = (severity: Report["severity"]) => {
  switch (severity) {
    case "High":
      return "bg-red-600/20 text-red-600";
    case "Medium":
      return "bg-orange-600/20 text-orange-600";
    case "Low":
      return "bg-blue-600/20 text-blue-600";
    default:
      return "bg-gray-600/20 text-gray-600";
  }
};

const ReportsTable = () => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/dashboard/reports/${id}`);
  };

  return (
    <div className="overflow-x-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Report ID</TableHead>
            <TableHead>Reported User</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow
              key={report.id}
              className="cursor-pointer"
              onClick={() => handleRowClick(report.id)}
            >
              <TableCell>{report.id}</TableCell>
              <TableCell>{report.user}</TableCell>
              <TableCell>{report.reason}</TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>
                <span
                  className={`rounded-md px-2 py-1 text-sm ${getStatusColor(report.status)}`}
                >
                  {report.status}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`rounded-md px-2 py-1 text-sm ${getSeverityColor(report.severity)}`}
                >
                  {report.severity}
                </span>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRowClick(report.id);
                  }}
                >
                  Review
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReportsTable;
