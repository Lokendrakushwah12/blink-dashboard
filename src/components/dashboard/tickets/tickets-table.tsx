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

type Ticket = {
  id: string;
  user: string;
  subject: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  category: string;
  createdAt: string;
  lastUpdated: string;
};

const tickets: Ticket[] = [
  {
    id: "#TKT-2024001",
    user: "John Doe",
    subject: "Unable to access account",
    priority: "High",
    status: "Open",
    category: "Account Access",
    createdAt: "Feb 20, 2024",
    lastUpdated: "Feb 20, 2024",
  },
  {
    id: "#TKT-2024002",
    user: "Jane Smith",
    subject: "Payment failed",
    priority: "Medium",
    status: "In Progress",
    category: "Billing",
    createdAt: "Feb 19, 2024",
    lastUpdated: "Feb 20, 2024",
  },
  {
    id: "#TKT-2024003",
    user: "Bob Wilson",
    subject: "Feature request",
    priority: "Low",
    status: "Open",
    category: "Feature Request",
    createdAt: "Feb 18, 2024",
    lastUpdated: "Feb 20, 2024",
  },
];

const getStatusColor = (status: Ticket["status"]) => {
  switch (status) {
    case "Open":
      return "bg-red-600/20 text-red-600";
    case "In Progress":
      return "bg-yellow-600/20 text-yellow-600";
    case "Resolved":
      return "bg-green-600/20 text-green-600";
    case "Closed":
      return "bg-gray-600/20 text-gray-600";
    default:
      return "bg-gray-600/20 text-gray-600";
  }
};

const getPriorityColor = (priority: Ticket["priority"]) => {
  switch (priority) {
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

const TicketsTable = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Recent Tickets</h1>
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.user}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.category}</TableCell>
                <TableCell>
                  <span
                    className={`rounded-md px-2 py-1 text-xs ${getPriorityColor(ticket.priority)}`}
                  >
                    {ticket.priority}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`rounded-md px-2 py-1 text-xs ${getStatusColor(ticket.status)}`}
                  >
                    {ticket.status}
                  </span>
                </TableCell>
                <TableCell>{ticket.createdAt}</TableCell>
                <TableCell>{ticket.lastUpdated}</TableCell>
                <TableCell>
                  <Button variant="default" size="sm">
                    Respond
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

export default TicketsTable;
