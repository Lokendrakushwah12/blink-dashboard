import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const cities = [
  { name: "Mumbai", revenue: 710 },
  { name: "Delhi", revenue: 1200 },
  { name: "Bangalore", revenue: 800 },
  { name: "Hyderabad", revenue: 600 },
  { name: "Ahmedabad", revenue: 500 },
  { name: "Chennai", revenue: 400 },
  { name: "Kolkata", revenue: 300 },
  { name: "Surat", revenue: 200 },
  { name: "Pune", revenue: 100 },
  { name: "Jaipur", revenue: 50 },
  { name: "Lucknow", revenue: 25 },
  { name: "Kanpur", revenue: 10 },
];

export default function RevenueCityCard() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total Revenue from the country
        </CardTitle>
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20">
          <svg
            height="16"
            width="16"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#2563eb"
              d="M480.36,494.742h-14.382V43.146c0-4.767-3.864-8.629-8.629-8.629H296.27c-4.766,0-8.629,3.862-8.629,8.629v37.393
                  h-17.258V43.146c0-4.767-3.864-8.629-8.629-8.629H224.36V8.629c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629v25.888
                  h-37.393c-4.766,0-8.629,3.862-8.629,8.629v37.393h-25.888c-4.766,0-8.629,3.862-8.629,8.629v71.91h-71.91
                  c-4.766,0-8.629,3.862-8.629,8.629v325.034H31.64c-4.766,0-8.629,3.862-8.629,8.629S26.875,512,31.64,512H480.36
                  c4.766,0,8.629-3.862,8.629-8.629S485.125,494.742,480.36,494.742z M178.337,51.775h74.786v28.764h-74.786V51.775z
                  M149.573,494.742h-5.753V480.36c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629v14.382h-5.753v-28.764h28.764
                  V494.742z M207.101,273.258v14.845v206.639h-40.27v-37.393c0-4.767-3.864-8.629-8.629-8.629H112.18
                  c-4.766,0-8.629,3.862-8.629,8.629v37.393h-40.27V178.337h143.82V273.258z M215.73,161.079h-71.91V97.798h143.82v166.831H224.36
                  v-28.764h25.888c4.766,0,8.629-3.862,8.629-8.629s-3.864-8.629-8.629-8.629H224.36v-28.764h25.888
                  c4.766,0,8.629-3.862,8.629-8.629s-3.864-8.629-8.629-8.629H224.36v-2.876C224.36,164.941,220.496,161.079,215.73,161.079z
                  M368.18,494.742H224.36V288.103v-6.215h143.82V494.742z M448.719,494.742h-63.281V273.258v-11.506
                  c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629v2.876h-17.258v-2.876c0-4.767-3.864-8.629-8.629-8.629
                  s-8.629,3.862-8.629,8.629v2.876h-28.764V89.169V51.775h143.82V494.742z"
            ></path>
            <path
              fill="#2563eb"
              d="M261.753,477.485c4.766,0,8.629-3.864,8.629-8.629V307.778c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v161.079C253.124,473.622,256.987,477.485,261.753,477.485z"
            ></path>
            <path
              fill="#2563eb"
              d="M296.27,477.485c4.766,0,8.629-3.864,8.629-8.629V307.778c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v161.079C287.64,473.622,291.504,477.485,296.27,477.485z"
            ></path>
            <path
              fill="#2563eb"
              d="M330.786,477.485c4.766,0,8.629-3.864,8.629-8.629V307.778c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v161.079C322.157,473.622,326.021,477.485,330.786,477.485z"
            ></path>
            <path
              fill="#2563eb"
              d="M342.292,109.303c4.766,0,8.629-3.862,8.629-8.629V89.169c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C333.663,105.441,337.526,109.303,342.292,109.303z"
            ></path>
            <path
              fill="#2563eb"
              d="M376.809,109.303c4.766,0,8.629-3.862,8.629-8.629V89.169c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C368.18,105.441,372.043,109.303,376.809,109.303z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,109.303c4.766,0,8.629-3.862,8.629-8.629V89.169c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,105.441,406.56,109.303,411.326,109.303z"
            ></path>
            <path
              fill="#2563eb"
              d="M342.292,166.831c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C333.663,162.969,337.526,166.831,342.292,166.831z"
            ></path>
            <path
              fill="#2563eb"
              d="M376.809,166.831c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C368.18,162.969,372.043,166.831,376.809,166.831z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,166.831c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C402.697,162.969,406.56,166.831,411.326,166.831z"
            ></path>
            <path
              fill="#2563eb"
              d="M342.292,224.36c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C333.663,220.497,337.526,224.36,342.292,224.36z"
            ></path>
            <path
              fill="#2563eb"
              d="M376.809,224.36c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C368.18,220.497,372.043,224.36,376.809,224.36z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,224.36c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,220.497,406.56,224.36,411.326,224.36z"
            ></path>
            <path
              fill="#2563eb"
              d="M100.674,247.371c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C92.045,243.508,95.909,247.371,100.674,247.371z"
            ></path>
            <path
              fill="#2563eb"
              d="M135.191,247.371c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C126.562,243.508,130.425,247.371,135.191,247.371z"
            ></path>
            <path
              fill="#2563eb"
              d="M169.708,247.371c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C161.079,243.508,164.942,247.371,169.708,247.371z"
            ></path>
            <path
              fill="#2563eb"
              d="M100.674,304.899c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C92.045,301.036,95.909,304.899,100.674,304.899z"
            ></path>
            <path
              fill="#2563eb"
              d="M135.191,304.899c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C126.562,301.036,130.425,304.899,135.191,304.899z"
            ></path>
            <path
              fill="#2563eb"
              d="M169.708,304.899c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C161.079,301.036,164.942,304.899,169.708,304.899z"
            ></path>
            <path
              fill="#2563eb"
              d="M100.674,362.427c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C92.045,358.565,95.909,362.427,100.674,362.427z"
            ></path>
            <path
              fill="#2563eb"
              d="M135.191,362.427c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C126.562,358.565,130.425,362.427,135.191,362.427z"
            ></path>
            <path
              fill="#2563eb"
              d="M169.708,362.427c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C161.079,358.565,164.942,362.427,169.708,362.427z"
            ></path>
            <path
              fill="#2563eb"
              d="M100.674,419.955c4.766,0,8.629-3.862,8.629-8.629V399.82c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C92.045,416.093,95.909,419.955,100.674,419.955z"
            ></path>
            <path
              fill="#2563eb"
              d="M135.191,419.955c4.766,0,8.629-3.862,8.629-8.629V399.82c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C126.562,416.093,130.425,419.955,135.191,419.955z"
            ></path>
            <path
              fill="#2563eb"
              d="M169.708,419.955c4.766,0,8.629-3.862,8.629-8.629V399.82c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C161.079,416.093,164.942,419.955,169.708,419.955z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,281.888c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,278.025,406.56,281.888,411.326,281.888z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,339.416c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C402.697,335.553,406.56,339.416,411.326,339.416z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,396.944c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C402.697,393.081,406.56,396.944,411.326,396.944z"
            ></path>
            <path
              fill="#2563eb"
              d="M411.326,454.472c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,450.609,406.56,454.472,411.326,454.472z"
            ></path>
            <path
              fill="#2563eb"
              d="M258.876,135.191c0-4.767-3.864-8.629-8.629-8.629h-69.034c-4.766,0-8.629,3.862-8.629,8.629
                  c0,4.767,3.864,8.629,8.629,8.629h69.034C255.013,143.82,258.876,139.958,258.876,135.191z"
            ></path>
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {selectedCity?.name}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search cities..." />
              <CommandList className="p-2">
                {cities.map((country) => (
                  <CommandItem
                    key={country.name}
                    onSelect={() => {
                      setSelectedCity(country);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    {country.name}
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="mt-4 text-2xl font-bold">₹{selectedCity?.revenue}</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
