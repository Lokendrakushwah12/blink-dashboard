"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, MoreHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface CityUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  gender: "male" | "female";
  imageURL: string;
  matches: number;
  reportCount: number;
  payments: string;
}

const CitiesUserTable = () => {
  const router = useRouter();
  const { city } = useParams();
  const [searchQuery, setSearchQuery] = React.useState("");

  // Mock data for the city
  const cityData = {
    name: city
      ? typeof city === "string"
        ? city.charAt(0).toUpperCase() + city.slice(1)
        : city
      : "",
    totalUsers: 10250,
    maleUsers: 5430,
    femaleUsers: 4820,
    users: [
      {
        id: 1,
        name: "Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        phoneNumber: "+91 98765 43210",
        gender: "male",
        imageURL:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
        matches: 23,
        reportCount: 0,
        payments: "₹150",
      },
      {
        id: 2,
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
        phoneNumber: "+91 87654 32109",
        gender: "female",
        imageURL:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        matches: 31,
        reportCount: 1,
        payments: "₹250",
      },
      {
        id: 3,
        name: "Amit Patel",
        email: "amit.patel@example.com",
        phoneNumber: "+91 76543 21098",
        gender: "male",
        imageURL:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        matches: 15,
        reportCount: 0,
        payments: "₹100",
      },
      {
        id: 4,
        name: "Neha Gupta",
        email: "neha.gupta@example.com",
        phoneNumber: "+91 65432 10987",
        gender: "female",
        imageURL:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        matches: 28,
        reportCount: 0,
        payments: "₹200",
      },
      {
        id: 5,
        name: "Vikas Singh",
        email: "vikas.singh@example.com",
        phoneNumber: "+91 54321 09876",
        gender: "male",
        imageURL:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        matches: 19,
        reportCount: 2,
        payments: "₹120",
      },
    ] as CityUser[],
  };

  const filteredUsers = React.useMemo(() => {
    return cityData.users.filter((user) => {
      const searchString = searchQuery.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchString) ||
        user.email.toLowerCase().includes(searchString) ||
        user.phoneNumber.includes(searchString)
      );
    });
  }, [cityData.users, searchQuery]);

  const handleUserClick = (userId: number) => {
    router.push(`/dashboard/user/${userId}`);
  };

  return (
    <div className="mx-auto w-full space-y-6 px-4">
      <Button
        variant="secondary"
        className="flex items-center gap-2 bg-transparent p-0 hover:bg-transparent hover:underline"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} />
        Back
      </Button>

      {/* <CardTitle>Users in {cityData.name}</CardTitle> */}

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-600/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Male Users</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20">
              <svg
                height="16"
                width="16"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m45.8 1.7h-13.8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h7.7l-9.2 9.2c-7.1-5.3-17.2-4.8-23.6 1.6-7 7-7 18.5 0 25.5s18.5 7 25.5 0c6.4-6.4 7-16.6 1.6-23.6l9.2-9.2v7.8c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-13.8c.1-1.4-1-2.5-2.4-2.5zm-16.8 37.8c-5.1 5.1-13.4 5.1-18.5 0s-5.1-13.4 0-18.5 13.4-5.1 18.5 0 5.1 13.4 0 18.5z"
                    fill="#2563eb"
                  ></path>
                </g>
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Female Users</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-pink-600/20">
              <svg
                height="16"
                width="16"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#db2777"
                  d="M376.264,290.173c66.314-66.293,66.314-174.16,0-240.453c-66.314-66.294-174.214-66.294-240.529,0
			c-66.314,66.293-66.314,174.16,0,240.453c28.07,28.061,63.591,44.24,100.254,48.546v56.923h-40.018
			c-11.051,0-20.009,8.956-20.009,20.003s8.958,20.003,20.009,20.003h40.018v56.348c0.001,11.047,8.959,20.003,20.011,20.003
			c11.051,0,20.009-8.956,20.009-20.003v-56.348h40.019c11.051,0,20.009-8.956,20.009-20.003s-8.958-20.003-20.009-20.003h-40.019
			V338.72C312.673,334.413,348.194,318.234,376.264,290.173z M164.033,261.884c-50.711-50.695-50.711-133.181,0-183.876
			c50.71-50.693,133.221-50.696,183.934,0c50.711,50.695,50.711,133.181,0,183.876C297.256,312.578,214.744,312.578,164.033,261.884
			z"
                ></path>
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">228</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users in {cityData.name}</CardTitle>
          <CardDescription>
            Showing {filteredUsers.length} of {cityData.users.length} total
            users
          </CardDescription>
          <div className="relative flex max-w-sm items-center gap-2">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead className="text-center">Matches</TableHead>
                  <TableHead className="text-center">Reported</TableHead>
                  <TableHead className="text-center">Payments</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleUserClick(user.id)}
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          src={user.imageURL}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          user.gender === "male"
                            ? "bg-blue-600/10 text-blue-600"
                            : "bg-pink-600/10 text-pink-600"
                        }
                      >
                        {user.gender.charAt(0).toUpperCase() +
                          user.gender.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {user.matches}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={
                          user.reportCount > 0 ? "destructive" : "outline"
                        }
                        className={user.reportCount > 0 ? "" : "bg-transparent"}
                      >
                        {user.reportCount}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {user.payments}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUserClick(user.id);
                            }}
                          >
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => e.stopPropagation()}
                          >
                            Contact User
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Suspend Account
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CitiesUserTable;
