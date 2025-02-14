import { Token } from "@/app/dashboard/page";
import { ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import TokenRow from "./token-row";
import { formatDistanceToNow, isValid } from "date-fns"; // Add date-fns utilities

interface TokenTableProps {
  tokens: Token[];
  onQuickBuy: (tokenName: string) => void;
}

const TokenTable: React.FC<TokenTableProps> = ({ tokens, onQuickBuy }) => {
  const [sortColumn, setSortColumn] = useState<keyof Token | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof Token) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedTokens = [...tokens].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];
    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    }
    return 0;
  });

  return (
    <div className="max-h-[89.2vh] w-full overflow-auto pb-6">
      <table className="w-full min-w-full text-left text-sm text-muted-foreground">
        <thead className="sticky -top-[1px] z-50 border border-muted/50 bg-background text-xs uppercase text-muted-foreground">
          <tr>
            <th
              onClick={() => handleSort("name")}
              className="cursor-pointer px-4 py-2 font-medium hover:bg-muted/40"
            >
              <div className="flex items-center">
                Token <ChevronsUpDown size={12} className="ml-4" />
              </div>
            </th>
            <th
              onClick={() => handleSort("created")}
              className="cursor-pointer px-4 py-2 font-medium hover:bg-muted/40"
            >
              <div className="flex items-center">
                Created <ChevronsUpDown size={12} className="ml-4" />
              </div>
            </th>
            <th
              onClick={() => handleSort("marketCap")}
              className="cursor-pointer px-4 py-2 font-medium hover:bg-muted/40"
            >
              <div className="flex items-center">
                Market Cap <ChevronsUpDown size={12} className="ml-4" />
              </div>
            </th>
            <th
              onClick={() => handleSort("totalSupply")}
              className="cursor-pointer px-4 py-2 font-medium hover:bg-muted/40"
            >
              <div className="flex items-center">
                Volume <ChevronsUpDown size={12} className="ml-4" />
              </div>
            </th>
            <th className="px-4 py-2 font-medium">Quick Buy</th>
          </tr>
        </thead>
        <tbody>
          {sortedTokens.map((token: Token) => {
            // Ensure valid date or fallback to a default
            const createdDate = token.created
              ? new Date(token.created)
              : new Date();
            const formattedCreated = isValid(createdDate)
              ? formatDistanceToNow(createdDate, { addSuffix: true })
              : "Invalid date";

            console.log("token formattedCreated", token);

            return (
              <TokenRow
                key={token.name}
                // address={token.}
                name={token.name}
                symbol={token.symbol}
                image={token.image || "https://via.placeholder.com/150"}
                created={createdDate.toISOString()}
                marketCap={token.marketCap}
                volume={token.totalSupply}
                mintAddress={token.mintAddress}
                uri={token.uri}
                onQuickBuy={() => onQuickBuy(token.name)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
