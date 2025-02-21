"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MoreHorizontal,
  Trash,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  ChevronsUpDown,
  ChevronsDownUp,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const PAGE_SIZE_OPTIONS = [10, 20, 30] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];

type userStatus = "active" | "suspended" | "blacklisted";
type SortDirection = "asc" | "desc" | null;

interface User {
  id: number;
  name: string;
  email: string;
  imageURL: string;
  phoneNumber: string;
  country: string;
  city: string;
  totalMatches: number;
  payments: string;
  reportCount: number;
  status: userStatus;
}

interface SortConfig {
  key: keyof User | null;
  direction: SortDirection;
}

const UsersTable = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<PageSize>(PAGE_SIZE_OPTIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<userStatus[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "New York, USA",
      city: "Gurgaon",
      totalMatches: 45,
      payments: "₹250",
      reportCount: 0,
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "London, UK",
      city: "Gurgaon",
      totalMatches: 32,
      payments: "₹180",
      reportCount: 2,
      status: "suspended",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Toronto, CA",
      city: "Gurgaon",
      totalMatches: 28,
      payments: "₹150",
      reportCount: 5,
      status: "blacklisted",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Sydney, AU",
      city: "Gurgaon",
      totalMatches: 52,
      payments: "₹320",
      reportCount: 1,
      status: "active",
    },
    {
      id: 5,
      name: "David Brown",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Berlin, DE",
      city: "Gurgaon",
      totalMatches: 39,
      payments: "₹210",
      reportCount: 3,
      status: "suspended",
    },
    {
      id: 6,
      name: "Emma Davis",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Paris, FR",
      city: "Gurgaon",
      totalMatches: 41,
      payments: "₹275",
      reportCount: 0,
      status: "active",
    },
    {
      id: 7,
      name: "Michael Wilson",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Tokyo, JP",
      city: "Gurgaon",
      totalMatches: 35,
      payments: "₹190",
      reportCount: 6,
      status: "blacklisted",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Seoul, KR",
      city: "Bangalore",
      totalMatches: 48,
      payments: "₹290",
      reportCount: 1,
      status: "active",
    },
    {
      id: 9,
      name: "James Taylor",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Mumbai, IN",
      city: "Gurgaon",
      totalMatches: 33,
      payments: "₹165",
      reportCount: 4,
      status: "suspended",
    },
    {
      id: 10,
      name: "Lokendra Kushwah",
      email: "Lokendra@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "India",
      city: "Gurgaon",
      totalMatches: 37,
      payments: "₹225",
      reportCount: 2,
      status: "active",
    },
    {
      id: 11,
      name: "Robert Martin",
      email: "Sophie@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Madrid, ES",
      city: "Chennai",
      totalMatches: 43,
      payments: "₹260",
      reportCount: 0,
      status: "active",
    },
    {
      id: 12,
      name: "Sophie Clark",
      email: "example@gmail.com",
      imageURL: "https://avatars.githubusercontent.com/u/118094744",
      phoneNumber: "+91 234 567 8902",
      country: "Amsterdam, NL",
      city: "Gurgaon",
      totalMatches: 31,
      payments: "₹170",
      reportCount: 7,
      status: "blacklisted",
    },
  ];

  const handleRowClick = (userId: Number) => {
    router.push(`/dashboard/user/${userId}`);
  };

  const handleDelete = (e: any, userId: Number) => {
    e.stopPropagation();
    console.log(`Delete user ${userId}`);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        searchQuery === "" ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.toString().includes(searchQuery) ||
        user.country.toString().includes(searchQuery) ||
        user.city.toString().includes(searchQuery);

      const matchesStatus =
        statusFilter.length === 0 || statusFilter.includes(user.status);

      return matchesSearch && matchesStatus;
    });
  }, [users, searchQuery, statusFilter]);

  const sortedUsers = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredUsers;

    return [...filteredUsers].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortConfig.direction === "asc"
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });
  }, [filteredUsers, sortConfig]);

  const totalPages = Math.ceil(sortedUsers.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentUsers = sortedUsers.slice(startIndex, endIndex);

  const handleSort = (key: keyof User) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (key: keyof User) => {
    if (sortConfig.key !== key)
      return (
        <ChevronsUpDown size={16} className="h-3 w-3 text-muted-foreground" />
      );
    return sortConfig.direction === "asc" ? (
      <ChevronsUpDown className="h-3 w-3" />
    ) : (
      <ChevronsUpDown className="h-3 w-3" />
    );
  };

  const getStatusColor = (status: userStatus) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500/10 text-green-600";
      case "suspended":
        return "bg-yellow-500/10 text-yellow-600";
      case "blacklisted":
        return "bg-rose-500/10 text-rose-600";
      default:
        return "bg-gray-500/10 text-gray-600";
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize: string) => {
    const size = parseInt(newSize) as PageSize;
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <div className="w-full space-y-4">
      <h1 className="text-2xl font-bold">All Users</h1>
      <div className="flex items-center justify-between">
        <div className="relative flex max-w-sm flex-1 items-center gap-2">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 pl-8"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["active", "suspended", "blacklisted"].map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={statusFilter.includes(status as userStatus)}
                onCheckedChange={(checked) => {
                  setStatusFilter((current) =>
                    checked
                      ? [...current, status as userStatus]
                      : current.filter((s) => s !== status),
                  );
                }}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {[
                { key: "id", label: "ID" },
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "location", label: "Location" },
                { key: "totalMatches", label: "Total Matches", align: "right" },
                { key: "payments", label: "Payments", align: "right" },
                { key: "reportCount", label: "Times Reported", align: "right" },
                { key: "status", label: "Status" },
              ].map(({ key, label, align }) => (
                <TableHead
                  key={key}
                  className={`m-0 h-fit gap-0 p-0 ${align === "right" ? "text-right" : undefined}`}
                >
                  <Button
                    variant="secondary"
                    onClick={() => handleSort(key as keyof User)}
                    className="flex size-full h-12 justify-start rounded-none bg-transparent text-left text-sm font-medium text-muted-foreground hover:bg-muted/20"
                  >
                    {label}
                    {getSortIcon(key as keyof User)}
                  </Button>
                </TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => handleRowClick(user.id)}
                className="cursor-pointer hover:bg-card/50"
              >
                <TableCell>{user.id}</TableCell>
                <TableCell className="flex w-[200px] items-center justify-start gap-1 font-medium">
                  {user?.imageURL ? (
                    <Image
                      src={user.imageURL}
                      alt={user.name}
                      width={100}
                      height={100}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500/20">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {user.name}
                </TableCell>
                <TableCell className="w-[200px] font-medium">
                  {user.email}
                </TableCell>
                <TableCell className="w-[200px] font-medium">
                  {user.country}, {user.city}
                </TableCell>
                <TableCell className="w-[100px] text-center font-medium">
                  {user.totalMatches}
                </TableCell>
                <TableCell className="w-[100px] text-center font-medium">
                  {user.payments}
                </TableCell>
                <TableCell className="w-[100px] text-center font-medium">
                  {user.reportCount}
                </TableCell>
                <TableCell className="w-[100px] text-center font-medium">
                  <span
                    className={`rounded-md px-2 py-1 text-xs ${getStatusColor(user.status)}`}
                  >
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center justify-start text-green-600 focus:text-green-600"
                        onClick={(e) => handleDelete(e, user.id)}
                      >
                        Active
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center justify-start text-yellow-600 focus:text-yellow-600"
                        onClick={(e) => handleDelete(e, user.id)}
                      >
                        Suspend
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center justify-start text-rose-600 focus:text-rose-600"
                        onClick={(e) => handleDelete(e, user.id)}
                      >
                        Blacklisted
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer text-muted-foreground focus:text-foreground"
                        onClick={(e) => handleDelete(e, user.id)}
                      >
                        <Trash size={15} />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls (unchanged) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">Rows per page</p>
          <Select
            value={pageSize.toString()}
            onValueChange={handlePageSizeChange}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize.toString()} />
            </SelectTrigger>
            <SelectContent side="top">
              {PAGE_SIZE_OPTIONS.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1">
            <span className="text-sm">{currentPage}</span>
            <span className="text-sm text-muted-foreground">of</span>
            <span className="text-sm">{totalPages}</span>
          </div>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
