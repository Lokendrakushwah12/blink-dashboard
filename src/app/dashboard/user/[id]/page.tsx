"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  Calendar,
  CalendarClock,
  CheckCircle,
  Clock,
  CreditCard,
  MapPin,
  Phone,
  User,
  Users,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});

type Status = "active" | "suspended" | "blacklisted";
type PaymentType = "subscription" | "pay-as-you-go";
type PreferenceType = "males-only" | "females-only" | "everyone";
type CallStatus = "completed" | "upcoming" | "canceled" | "rescheduled";

interface MatchHistory {
  id: number;
  name: string;
  date: string;
  imageURL: string;
  duration?: string;
  rating?: number;
  notes?: string;
}

interface CallBooking {
  id: number;
  matchName: string;
  matchImageURL: string;
  originalDate: string;
  scheduledDate: string;
  status: CallStatus;
  rescheduled: boolean;
  duration?: string;
}

interface PaymentInfo {
  type: PaymentType;
  amount: string;
  lastPayment?: string;
  nextBilling?: string; // For subscription
  callsMade?: number; // For pay-as-you-go
  callRate?: string; // For pay-as-you-go
}

interface PinnedPlace {
  id: number;
  name: string;
  type: "restaurant" | "event";
  imageURL: string;
  location: string;
  date?: string; // Optional date for events
  description: string;
}

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
  paymentInfo: PaymentInfo; // Added payment info
  reportCount: number;
  status: Status;
  statusReason?: string; // Added reason for suspension/blacklisting
  joinDate: string;
  lastActive: string;
  bio: string;
  matchHistory: MatchHistory[];
  videoURL: string;
  prompts: string[];
  imagesURLs: string[];
  pinnedPlaces: PinnedPlace[];
  preference: PreferenceType;
  callBookings: CallBooking[];
}

const UserDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  const [user, setUser] = useState<User>({
    id: 1,
    name: "Anastasiya Badun",
    email: "anastasirabadun34@gmail.com",
    imageURL:
      "https://images.unsplash.com/photo-1698620625582-b11424bb9127?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phoneNumber: "+91 234 567 8902",
    country: "India",
    city: "Pune",
    totalMatches: 45,
    payments: "₹270",
    paymentInfo: {
      type: "pay-as-you-go", // or "subscription"
      amount: "₹270",
      lastPayment: "2024-02-12",
      callsMade: 18,
      callRate: "₹15 per match request",
    },
    reportCount: 0,
    status: "suspended", // Changed to test suspension
    statusReason:
      "Multiple users reported inappropriate messages. Account under review until 03/15/2025.", // Added reason
    joinDate: "2024-01-15",
    lastActive: "2024-02-16",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    matchHistory: [
      {
        id: 1,
        name: "Jane Smith",
        date: "2024-02-15",
        imageURL:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        duration: "24 minutes",
        rating: 4,
        notes: "Great conversation about travel",
      },
      {
        id: 2,
        name: "Sarah Wilson",
        date: "2024-02-10",
        imageURL:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        duration: "17 minutes",
        rating: 5,
        notes: "Discussed common interests in art",
      },
      {
        id: 3,
        name: "Michael Chen",
        date: "2024-02-05",
        imageURL:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
        duration: "32 minutes",
        rating: 4,
        notes: "Shared interests in cooking",
      },
      {
        id: 4,
        name: "David Johnson",
        date: "2024-01-28",
        imageURL:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        duration: "15 minutes",
        rating: 3,
        notes: "Brief conversation",
      },
      {
        id: 5,
        name: "Robert Williams",
        date: "2024-01-22",
        imageURL:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        duration: "28 minutes",
        rating: 5,
        notes: "Very engaging discussion",
      },
    ],
    videoURL: "https://www.w3schools.com/html/mov_bbb.mp4",
    prompts: [
      "If I could travel anywhere, I'd go to...",
      "The best way to win me over is...",
      "A fun fact about me is...",
    ],
    imagesURLs: [
      "https://images.unsplash.com/photo-1698620625664-d511d1a0e137?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698620625532-1a721990501f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698620625651-bf16741e3fa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    pinnedPlaces: [
      {
        id: 1,
        name: "Spice Garden Restaurant",
        type: "restaurant",
        imageURL:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        location: "MG Road, Pune",
        description:
          "My favorite spot for authentic Indian cuisine with amazing ambiance.",
      },
      {
        id: 2,
        name: "Pune Music Festival",
        type: "event",
        imageURL:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop",
        location: "Shivaji Park, Pune",
        date: "2024-03-15",
        description:
          "Annual music festival with great artists and food stalls.",
      },
    ],
    preference: "males-only",
    callBookings: [
      {
        id: 101,
        matchName: "James Wilson",
        matchImageURL:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        originalDate: "2024-02-27",
        scheduledDate: "2024-02-27",
        status: "upcoming",
        rescheduled: false,
      },
      {
        id: 102,
        matchName: "Alex Thompson",
        matchImageURL:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1970&auto=format&fit=crop",
        originalDate: "2024-02-20",
        scheduledDate: "2024-02-25",
        status: "completed",
        rescheduled: true,
        duration: "22 minutes",
      },
      {
        id: 103,
        matchName: "Noah Garcia",
        matchImageURL:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
        originalDate: "2024-03-01",
        scheduledDate: "2024-03-01",
        status: "upcoming",
        rescheduled: false,
      },
      {
        id: 104,
        matchName: "Daniel Kim",
        matchImageURL:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        originalDate: "2024-02-15",
        scheduledDate: "2024-02-15",
        status: "canceled",
        rescheduled: false,
      },
    ],
  });

  const handleStatusChange = (newStatus: Status) => {
    let newStatusReason: string | undefined;

    // Set appropriate reason based on new status
    if (newStatus === "active") {
      newStatusReason = undefined;
    } else if (newStatus === "suspended") {
      newStatusReason =
        "Account manually suspended by administrator on " +
        new Date().toLocaleDateString();
    } else if (newStatus === "blacklisted") {
      newStatusReason =
        "Account permanently blacklisted by administrator on " +
        new Date().toLocaleDateString();
    }

    // Update user state with new status
    setUser({
      ...user,
      status: newStatus,
      statusReason: newStatusReason,
    });

    // Here you would typically make an API call to update the user status
    console.log(`User status changed to: ${newStatus}`);
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

  const getPreferenceIcon = (preference: PreferenceType) => {
    switch (preference) {
      case "males-only":
        return <User className="mr-1 h-4 w-4" />;
      case "females-only":
        return <User className="mr-1 h-4 w-4" />;
      case "everyone":
        return <Users className="mr-1 h-4 w-4" />;
      default:
        return <User className="mr-1 h-4 w-4" />;
    }
  };

  const getPreferenceText = (preference: PreferenceType) => {
    switch (preference) {
      case "males-only":
        return "Males Only";
      case "females-only":
        return "Females Only";
      case "everyone":
        return "Everyone";
      default:
        return preference;
    }
  };

  const getPaymentTypeColor = (type: PaymentType) => {
    switch (type.toLowerCase()) {
      case "subscription":
        return "bg-purple-600/10 text-purple-600";
      case "pay-as-you-go":
        return "bg-blue-600/10 text-blue-600";
      default:
        return "bg-gray-600/10 text-gray-600";
    }
  };

  const getCallStatusColor = (status: CallStatus) => {
    switch (status) {
      case "completed":
        return "bg-green-600/10 text-green-600";
      case "upcoming":
        return "bg-blue-600/10 text-blue-600";
      case "canceled":
        return "bg-rose-600/10 text-rose-600";
      case "rescheduled":
        return "bg-amber-600/10 text-amber-600";
      default:
        return "bg-gray-600/10 text-gray-600";
    }
  };

  const handlePlaceClick = (placeId: number) => {
    console.log(`Navigate to place: ${placeId}`);
  };

  // Determine if we need to show status reason

  const rescheduledBookingsCount = user.callBookings.filter(
    (booking) => booking.rescheduled,
  ).length;
  const upcomingBookingsCount = user.callBookings.filter(
    (booking) => booking.status === "upcoming",
  ).length;

  const handleMatchClick = (matchId: number) => {
    router.push(`/dashboard/user/${matchId}`);
  };

  const showStatusReason = user.status !== "active" && user.statusReason;

  const renderStatusActionButtons = () => {
    switch (user.status) {
      case "active":
        return (
          <div className="mt-4 flex w-full flex-wrap gap-3">
            <Button
              variant="warning"
              className="flex items-center gap-2"
              onClick={() => handleStatusChange("suspended")}
            >
              <AlertTriangle size={16} />
              Suspend Account
            </Button>
            <Button
              variant="destructive"
              className="flex items-center gap-2"
              onClick={() => handleStatusChange("blacklisted")}
            >
              <Ban size={16} />
              Blacklist Account
            </Button>
          </div>
        );
      case "suspended":
        return (
          <div className="mt-4 flex w-full flex-wrap gap-3">
            <Button
              variant="default"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              onClick={() => handleStatusChange("active")}
            >
              <CheckCircle size={16} />
              Activate Account
            </Button>
            <Button
              variant="destructive"
              className="flex items-center gap-2"
              onClick={() => handleStatusChange("blacklisted")}
            >
              <Ban size={16} />
              Blacklist Account
            </Button>
          </div>
        );
      case "blacklisted":
        return (
          <div className="mt-4 flex w-full flex-wrap gap-3">
            <Button
              variant="default"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              onClick={() => handleStatusChange("active")}
            >
              <CheckCircle size={16} />
              Activate Account
            </Button>
            <Button
              variant="warning"
              className="flex items-center gap-2"
              onClick={() => handleStatusChange("suspended")}
            >
              <AlertTriangle size={16} />
              Suspend Account
            </Button>
          </div>
        );
      default:
        return null;
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
            <div className="flex w-full flex-wrap items-start gap-4 justify-between">
              <div>
                <h3 className="text-2xl font-bold">{user.name}</h3>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-muted-foreground">{user.phoneNumber}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Badge className={getStatusColor(user.status)}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </Badge>
                <Badge className={getPaymentTypeColor(user.paymentInfo.type)}>
                  {user.paymentInfo.type === "subscription"
                    ? "Subscribed"
                    : "Pay-as-you-go"}
                </Badge>
                <Badge className="flex items-center bg-indigo-600/10 text-indigo-600">
                  {getPreferenceIcon(user.preference)}
                  {getPreferenceText(user.preference)}
                </Badge>
              </div>
            </div>

            {/* Status reason alert - only shown for suspended/blacklisted users */}
            {showStatusReason && (
              <Alert
                variant={
                  user.status === "suspended" ? "warning" : "destructive"
                }
              >
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>
                  Account{" "}
                  {user.status === "suspended" ? "Suspended" : "Blacklisted"}
                </AlertTitle>
                <AlertDescription>{user.statusReason}</AlertDescription>
              </Alert>
            )}
            {renderStatusActionButtons()}
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

            {/* Payment Info Card */}
            <Card className="border border-muted p-4">
              <div className="mb-3 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Payment Information</h4>
              </div>

              {user.paymentInfo.type === "subscription" ? (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Plan</span>
                    <span className="font-medium">Monthly Subscription</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Amount
                    </span>
                    <span className="font-medium">
                      {user.paymentInfo.amount}/month
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Last Payment
                    </span>
                    <span className="font-medium">
                      {user.paymentInfo.lastPayment}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Next Billing
                    </span>
                    <span className="font-medium">
                      {user.paymentInfo.nextBilling}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Plan</span>
                    <span className="font-medium">Pay-as-you-go</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total Spent
                    </span>
                    <span className="font-medium">
                      {user.paymentInfo.amount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Last Payment
                    </span>
                    <span className="font-medium">
                      {user.paymentInfo.lastPayment}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Calls Made
                    </span>
                    <span className="font-medium">
                      {user.paymentInfo.callsMade}
                    </span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rate</span>
                    <span className="font-medium">{user.paymentInfo.callRate}</span>
                  </div> */}
                </div>
              )}
            </Card>
            <Card className="border border-muted p-4">
              <div className="mb-3 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Call Bookings Summary</h4>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Total Bookings
                  </span>
                  <span className="font-medium">
                    {user.callBookings.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Upcoming Calls
                  </span>
                  <span className="font-medium">{upcomingBookingsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Rescheduled Calls
                  </span>
                  <span className="font-medium">
                    {rescheduledBookingsCount}
                  </span>
                </div>
              </div>
            </Card>

            {/* <div>
              <h4 className="mb-2 font-medium">Recent Matches</h4>
              <div className="space-y-2">
                {user.matchHistory.map((match) => (
                  <div
                    key={match.id}
                    className="flex cursor-pointer items-center justify-between rounded-md bg-muted/50 p-2 transition-colors hover:bg-muted"
                    onClick={() => handleMatchClick(match.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={match.imageURL}
                        alt={match.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <span>{match.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {match.date}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
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

      {/* Take Me Here Section */}
      <Card className="border-0">
        <CardHeader>
          <CardTitle>Take Me Here</CardTitle>
          <CardDescription>
            Restaurants and events I'd love to visit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {user.pinnedPlaces.map((place) => (
              <Card key={place.id} className="overflow-hidden border shadow-sm">
                <div className="relative h-48 w-full">
                  <Image
                    src={place.imageURL}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    className={
                      place.type === "restaurant"
                        ? "absolute right-2 top-2 bg-orange-600/10 text-orange-600"
                        : "absolute right-2 top-2 bg-blue-600/10 text-blue-600"
                    }
                  >
                    {place.type === "restaurant" ? "Restaurant" : "Event"}
                  </Badge>
                </div>
                <CardContent className="pt-4">
                  <h3 className="mb-1 text-lg font-bold">{place.name}</h3>
                  <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>{place.location}</span>
                  </div>
                  {place.date && (
                    <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{place.date}</span>
                    </div>
                  )}
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {place.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0">
        <CardHeader>
          <CardTitle>Images</CardTitle>
          <CardDescription>See me in images</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
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
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5" />
            Call Bookings
          </CardTitle>
          <CardDescription>Upcoming and past call appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Match</TableHead>
                <TableHead>Original Date</TableHead>
                <TableHead>Scheduled Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Rescheduled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.callBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={booking.matchImageURL}
                        alt={booking.matchName}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span>{booking.matchName}</span>
                    </div>
                  </TableCell>
                  <TableCell>{booking.originalDate}</TableCell>
                  <TableCell>{booking.scheduledDate}</TableCell>
                  <TableCell>
                    <Badge className={getCallStatusColor(booking.status)}>
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{booking.duration || "-"}</TableCell>
                  <TableCell>
                    {booking.rescheduled ? (
                      <Badge className="bg-amber-600/10 text-amber-600">
                        Yes
                      </Badge>
                    ) : (
                      <span>No</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Detailed Match History
          </CardTitle>
          <CardDescription>
            Complete history of past matches with call details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Match</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.matchHistory.map((match) => (
                <TableRow
                  key={match.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleMatchClick(match.id)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={match.imageURL}
                        alt={match.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span>{match.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{match.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {match.duration || "N/A"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < (match.rating || 0)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {match.notes || "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
