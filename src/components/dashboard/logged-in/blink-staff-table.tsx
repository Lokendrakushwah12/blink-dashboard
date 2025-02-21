import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type Staff = {
  id: string;
  name: string;
  role: string;
  status: "Online" | "Offline" | "Busy";
  lastActive: string;
};

const staffMembers: Staff[] = [
  {
    id: "STF-001",
    name: "Alice Johnson",
    role: "Support Agent",
    status: "Online",
    lastActive: "2025-02-21 14:30",
  },
  {
    id: "STF-002",
    name: "Bob Smith",
    role: "Manager",
    status: "Offline",
    lastActive: "2025-02-21 12:15",
  },
];

const getStatusColor = (status: Staff["status"]) => {
  switch (status) {
    case "Online":
      return "bg-green-600/20 text-green-600";
    case "Offline":
      return "bg-foreground/10 text-white";
    case "Busy":
      return "bg-yellow-600/20 text-yellow-600";
    default:
      return "bg-foreground/10 text-white";
  }
};

const BlinkStaffTable = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Blink Staff - Active Members</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Staff ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffMembers.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell className="font-medium">{staff.id}</TableCell>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.role}</TableCell>
                <TableCell>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${getStatusColor(staff.status)}`}
                  >
                    {staff.status}
                  </span>
                </TableCell>
                <TableCell>{staff.lastActive}</TableCell>
                <TableCell>
                  <Button variant="default" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlinkStaffTable;
