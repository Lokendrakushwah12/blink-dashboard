import React from "react";
import { useRouter } from "next/router";
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

type Status = "active" | "suspended" | "blacklisted";

interface User {
  id: number;
  name: string;
  email: string;
  location: string;
  totalMatches: number;
  payments: string;
  reportCount: number;
  status: Status;
  joinDate: string;
  lastActive: string;
  bio: string;
  matchHistory: { id: number; name: string; date: string }[];
}

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const user:User[] = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    totalMatches: 45,
    payments: "$250",
    reportCount: 0,
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "2024-02-16",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    matchHistory: [
      { id: 1, name: "Jane Smith", date: "2024-02-15" },
      { id: 2, name: "Sarah Wilson", date: "2024-02-10" },
    ],
  };

  const getStatusColor = (status: Status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "suspended":
        return "bg-yellow-100 text-yellow-800";
      case "blacklisted":
        return "bg-rose-100 text-rose-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto space-y-6 py-8">
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} />
        Back to Users
      </Button>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Basic user details and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold">{user.name}</h3>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <Badge className={getStatusColor(user.status)}>
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{user.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Join Date</p>
                <p className="font-medium">{user.joinDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Active</p>
                <p className="font-medium">{user.lastActive}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Matches</p>
                <p className="font-medium">{user.totalMatches}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
            <CardDescription>User activity and statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Payments</p>
                <p className="text-2xl font-bold">{user.payments}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Times Reported</p>
                <p className="text-2xl font-bold">{user.reportCount}</p>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Recent Matches</h4>
              <div className="space-y-2">
                {user.matchHistory.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between rounded-md bg-muted p-2"
                  >
                    <span>{match.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {match.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;
