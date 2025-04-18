import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function RecentSignups() {
  const error = new Error("whoops");
  return (
    <Card className="pb-0 md:pb-7">
      <div className="flex items-end justify-between">
        <CardHeader>
          <CardTitle>Recent Sign ups</CardTitle>
          <CardDescription>You made 265 sign ups this month.</CardDescription>
        </CardHeader>
        <CardHeader>
          <Link href="/dashboard/recent-signups">
            <CardDescription className="cursor-pointer hover:underline">
              View all
            </CardDescription>
          </Link>
        </CardHeader>
      </div>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://api.slingacademy.com/public/sample-users/1.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">Pune, IN</div>
          </div>
          <div className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage
                src="https://api.slingacademy.com/public/sample-users/2.png"
                alt="Avatar"
              />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-muted-foreground">
                jackson.lee@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">Pune, IN</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://api.slingacademy.com/public/sample-users/3.png"
                alt="Avatar"
              />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                Isabella Nguyen
              </p>
              <p className="text-sm text-muted-foreground">
                isabella.nguyen@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">Pune, IN</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://api.slingacademy.com/public/sample-users/4.png"
                alt="Avatar"
              />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">William Kim</p>
              <p className="text-sm text-muted-foreground">will@email.com</p>
            </div>
            <div className="ml-auto font-medium">Pune, IN</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://api.slingacademy.com/public/sample-users/5.png"
                alt="Avatar"
              />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">
                sofia.davis@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">Pune, IN</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
