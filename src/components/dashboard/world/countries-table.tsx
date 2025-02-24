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
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const PAGE_SIZE_OPTIONS = [10, 20, 30] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];
interface CountryData {
  id: number;
  country: string;
  male: number;
  female: number;
  total: number;
}

type SortConfig = {
  key: keyof CountryData | null;
  direction: "asc" | "desc" | null;
};

const CountriesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<PageSize>(PAGE_SIZE_OPTIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });

  const countriesData: CountryData[] = [
    {
      id: 1,
      country: "India",
      male: 700000000,
      female: 650000000,
      total: 1350000000,
    },
    {
      id: 2,
      country: "United States",
      male: 165000000,
      female: 170000000,
      total: 335000000,
    },
    {
      id: 3,
      country: "China",
      male: 715000000,
      female: 685000000,
      total: 1400000000,
    },
    {
      id: 4,
      country: "Brazil",
      male: 105000000,
      female: 110000000,
      total: 215000000,
    },
    {
      id: 5,
      country: "Russia",
      male: 66000000,
      female: 77000000,
      total: 143000000,
    },
    {
      id: 6,
      country: "Japan",
      male: 62000000,
      female: 65000000,
      total: 127000000,
    },
  ];

  const filteredCountires = useMemo(() => {
    return countriesData.filter((country) => {
      const searchString = searchQuery.toLowerCase();
      return country.country.toLowerCase().includes(searchString);
    });
  }, [countriesData, searchQuery]);

  const sortedCountries = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredCountires;

    return [...filteredCountires].sort((a, b) => {
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
  }, [filteredCountires, sortConfig]);

  const handleSort = (key: keyof CountryData) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (key: keyof CountryData) => {
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

  const totalPages = Math.ceil(sortedCountries.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCountries = sortedCountries.slice(startIndex, endIndex);

  const navigateToCountryPage = (id: number) => {
    router.push(`/dashboard/world/country/${1}`);
  };

  return (
    <div className="w-full space-y-4">
      <h1 className="text-2xl font-bold">Countries Gender Distribution</h1>

      <div className="flex items-center justify-between">
        <div className="relative flex max-w-sm flex-1 items-center gap-2">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by country ..."
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
                { key: "country", label: "country" },
                { key: "male", label: "Male Users" },
                { key: "female", label: "Female Users" },
                { key: "total", label: "Total Users" },
              ].map(({ key, label }) => (
                <TableHead key={key} className="m-0 h-fit gap-0 p-0">
                  <Button
                    variant="secondary"
                    onClick={() => handleSort(key as keyof CountryData)}
                    className="flex size-full h-12 justify-center rounded-none bg-transparent text-left text-sm font-medium text-muted-foreground hover:bg-muted/20"
                  >
                    {label}
                    {getSortIcon(key as keyof CountryData)}
                  </Button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentCountries.map((country) => (
              <TableRow
                key={country.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => navigateToCountryPage(country.id)}
              >
                <TableCell className="text-center font-medium">
                  {country.country}
                </TableCell>
                {/* <TableCell>{country.state}</TableCell> */}
                <TableCell className="text-center">
                  {country.male.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {country.female.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {country.total.toLocaleString()}
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

export default CountriesTable;
