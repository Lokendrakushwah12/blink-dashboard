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
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});

type Status = "active" | "suspended" | "blacklisted";

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
  status: Status;
  joinDate: string;
  lastActive: string;
  bio: string;
  matchHistory: { id: number; name: string; date: string }[];
  videoURL: string;
  prompts: string[];
  imagesURLs: string[];
}

const UserDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  const user: User = {
    id: 1,
    name: "Anastasiya Badun",
    email: "anastasirabadun34@gmail.com",
    imageURL:
      "https://images.unsplash.com/photo-1698620625582-b11424bb9127?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phoneNumber: "+91 234 567 8902",
    country: "India",
    city: "Pune",
    totalMatches: 45,
    payments: "₹250",
    reportCount: 0,
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "2024-02-16",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    matchHistory: [
      { id: 1, name: "Jane Smith", date: "2024-02-15" },
      { id: 2, name: "Sarah Wilson", date: "2024-02-10" },
    ],
    videoURL: "https://www.w3schools.com/html/mov_bbb.mp4",
    prompts: [
      "If I could travel anywhere, I’d go to...",
      "The best way to win me over is...",
      "A fun fact about me is...",
    ],
    imagesURLs: [
      "https://images.unsplash.com/photo-1698620625664-d511d1a0e137?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698620625532-1a721990501f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698620625651-bf16741e3fa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };

  const getStatusColor = (status: Status) => {
    switch (status.toLowerCase()) {
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
        Back to Users
      </Button>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-0">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Basic user details and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src={user.imageURL}
              alt={user.name}
              width={200}
              height={200}
              className="h-28 w-28 rounded-full object-cover"
            />
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold">{user.name}</h3>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-muted-foreground">{user.phoneNumber}</p>
              </div>
              <Badge className={getStatusColor(user.status)}>
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">
                  {user.city}, {user.country}
                </p>
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

        <Card className="border-0">
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
                    className="flex items-center justify-between rounded-md bg-muted/50 p-2"
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
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Prompts</CardTitle>
            <CardDescription>Get to know me better</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {user.prompts.map((prompt, index) => (
                <li key={index} className="border-l-4 border-primary pl-3">
                  {prompt}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Video Introduction</CardTitle>
            <CardDescription>See and hear me in action</CardDescription>
          </CardHeader>
          <CardContent>
            <VideoPlayer src={user.videoURL} />
          </CardContent>
        </Card>
      </div>
      <Card className="border-0">
        <CardHeader>
          <CardTitle>Images</CardTitle>
          <CardDescription>See me in images</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {user.imagesURLs.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className="h-[500px] w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
