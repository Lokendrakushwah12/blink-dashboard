"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

const PAGE_SIZE_OPTIONS = [10, 20, 30] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];
interface CityData {
  id: number;
  city: string;
  //   state: string;
  male: number;
  female: number;
  total: number;
}

type SortConfig = {
  key: keyof CityData | null;
  direction: "asc" | "desc" | null;
};

const CitiesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<PageSize>(PAGE_SIZE_OPTIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });

  // Sample data - replace with your actual data
  const citiesData: CityData[] = [
    {
      id: 1,
      city: "Mumbai",
      //   state: "Maharashtra",
      male: 5430,
      female: 4820,
      total: 10250,
    },
    {
      id: 2,
      city: "Delhi",
      //   state: "Delhi",
      male: 6240,
      female: 5680,
      total: 11920,
    },
    {
      id: 3,
      city: "Bangalore",
      //   state: "Karnataka",
      male: 4890,
      female: 4560,
      total: 9450,
    },
    {
      id: 4,
      city: "Chennai",
      //   state: "Tamil Nadu",
      male: 3780,
      female: 3420,
      total: 7200,
    },
    {
      id: 5,
      city: "Kolkata",
      //   state: "West Bengal",
      male: 4120,
      female: 3890,
      total: 8010,
    },
    {
      id: 6,
      city: "Hyderabad",
      //   state: "Telangana",
      male: 3950,
      female: 3680,
      total: 7630,
    },
  ];

  const filteredCities = useMemo(() => {
    return citiesData.filter((city) => {
      const searchString = searchQuery.toLowerCase();
      return city.city.toLowerCase().includes(searchString);
      // city.state.toLowerCase().includes(searchString)
    });
  }, [citiesData, searchQuery]);

  const sortedCities = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredCities;

    return [...filteredCities].sort((a, b) => {
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
  }, [filteredCities, sortConfig]);

  const handleSort = (key: keyof CityData) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (key: keyof CityData) => {
    if (sortConfig.key !== key) {
      return <ChevronsUpDown className="h-3 w-3 text-muted-foreground" />;
    }
    return <ChevronsUpDown className="h-3 w-3" />;
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize: string) => {
    const size = parseInt(newSize) as PageSize;
    setPageSize(size);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(sortedCities.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCities = sortedCities.slice(startIndex, endIndex);

  return (
    <div className="w-full space-y-4">
      <h1 className="text-2xl font-bold">Cities Gender Distribution</h1>

      <div className="flex items-center justify-between">
        <div className="relative flex max-w-sm flex-1 items-center gap-2">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by city ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {[
                { key: "city", label: "City" },
                // { key: "state", label: "State" },
                { key: "male", label: "Male Users" },
                { key: "female", label: "Female Users" },
                { key: "total", label: "Total Users" },
              ].map(({ key, label }) => (
                <TableHead key={key} className="m-0 h-fit gap-0 p-0">
                  <Button
                    variant="secondary"
                    onClick={() => handleSort(key as keyof CityData)}
                    className="flex size-full h-12 justify-center rounded-none bg-transparent text-left text-sm font-medium text-muted-foreground hover:bg-muted/20"
                  >
                    {label}
                    {getSortIcon(key as keyof CityData)}
                  </Button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentCities.map((city) => (
              <TableRow key={city.id}>
                <TableCell className="text-center font-medium">
                  {city.city}
                </TableCell>
                {/* <TableCell>{city.state}</TableCell> */}
                <TableCell className="text-center">
                  {city.male.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {city.female.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {city.total.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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

export default CitiesTable;
