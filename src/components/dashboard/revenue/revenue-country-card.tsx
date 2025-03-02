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

const countries = [
  { name: "India", code: "IN", revenue: 945 },
  { name: "United States", code: "US", revenue: 1200 },
  { name: "United Kingdom", code: "UK", revenue: 800 },
  { name: "Australia", code: "AU", revenue: 600 },
  { name: "Canada", code: "CA", revenue: 500 },
  { name: "Germany", code: "DE", revenue: 400 },
  { name: "France", code: "FR", revenue: 300 },
  { name: "Italy", code: "IT", revenue: 200 },
  { name: "Spain", code: "ES", revenue: 100 },
  { name: "Brazil", code: "BR", revenue: 50 },
  { name: "Mexico", code: "MX", revenue: 25 },
  { name: "Japan", code: "JP", revenue: 10 },
];

export default function RevenueCountryCard() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total Revenue from the country
        </CardTitle>
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-600/20">
          <svg
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-muted-foreground"
          >
            <path
              fill="#ea580c"
              d="m20.48 8.301c.495 1.133.77 2.384.77 3.699 0 5.105-4.145 9.25-9.25 9.25s-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75c-5.933 0-10.75 4.817-10.75 10.75s4.817 10.75 10.75 10.75 10.75-4.817 10.75-10.75c0-1.529-.32-2.983-.896-4.301-.166-.379-.609-.552-.988-.386s-.552.608-.386.988z"
            ></path>
            <path
              fill="#ea580c"
              d="m17 1.25c-1.9 0-3.442 1.542-3.442 3.442 0 .594.269 1.317.685 2.023.835 1.421 2.227 2.815 2.227 2.815.293.293.767.293 1.06 0 0 0 1.392-1.394 2.227-2.815.416-.706.685-1.429.685-2.023 0-1.9-1.542-3.442-3.442-3.442zm0 1.5c1.072 0 1.942.87 1.942 1.942 0 .528-.393 1.177-.815 1.789-.377.546-.802 1.054-1.127 1.42-.325-.366-.75-.874-1.127-1.42-.422-.612-.815-1.261-.815-1.789 0-1.072.87-1.942 1.942-1.942z"
            ></path>
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {selectedCountry?.name}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search countries..." />
              <CommandList className="p-2">
                {countries.map((country) => (
                  <CommandItem
                    key={country.name}
                    onSelect={() => {
                      setSelectedCountry(country);
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
        <div className="mt-4 text-2xl font-bold">
          ₹{selectedCountry?.revenue}
        </div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
