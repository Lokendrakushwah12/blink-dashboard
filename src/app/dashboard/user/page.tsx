import RegistrationTrend from "@/components/dashboard/user/registration-trend";
import UsersTable from "@/components/dashboard/user/user-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Tickets } from "lucide-react";

const ExplorePage = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Matches
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600/20">
              <Heart size={16} className="text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-full flex-col gap-4">
        <UsersTable />
        {/* <div className="col-span-7 md:col-span-3">{Sales()}</div> */}
        {/* <div className="col-span-7">{WorldStats()}</div> */}
      </div>
    </div>
  );
};

export default ExplorePage;
