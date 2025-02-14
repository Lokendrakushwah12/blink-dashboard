"use client";

import { formatDistanceToNowStrict } from "date-fns";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CopyIcon from "../assets/CopyIcon";
import TelegramIcon from "../assets/TelegramIcon";
import XIcon from "../assets/XIcon";
import { Button } from "../ui/button";

const formatLargeNumber = (num: string | number) => {
  if (typeof num !== "number") {
    num = parseInt(num);
  }
  if (num > 1e12) {
    return `${(num / 1e12).toFixed(2)}T`;
  }
  if (num > 1e9) {
    return `${(num / 1e9).toFixed(2)}B`;
  } else if (num > 1e6) {
    return `${(num / 1e6).toFixed(2)}M`;
  } else if (num > 1e3) {
    return `${(num / 1e3).toFixed(2)}K`;
  }
};

interface TokenProps {
  name: string;
  symbol: string;
  image: string;
  created: string;
  marketCap: string;
  volume: string | number;
  mintAddress: string;
  uri: string;
  onQuickBuy: () => void;
}

const TokenRow: React.FC<TokenProps> = ({
  name,
  symbol,
  image = "https://via.placeholder.com/150",
  created,
  marketCap,
  volume,
  mintAddress,
  uri,
  onQuickBuy,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [relativeTime, setRelativeTime] = useState("");
  const [relativeTimeColor, setRelativeTimeColor] = useState(
    "text-muted-foreground",
  );
  const [showPopover, setShowPopover] = useState(false);
  const router = useRouter();
  const [twitter, setTwitter] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [telegram, setTelegram] = useState<string | null>(null);

  useEffect(() => {
    const updateRelativeTime = () => {
      const timeAgo =
        formatDistanceToNowStrict(new Date(created), { addSuffix: true }) || ""; // Fallback to an empty string if undefined
      setRelativeTime(timeAgo);

      // Safe parsing of the number from timeAgo
      const timeParts = timeAgo.split(" ");
      const timeValue = timeParts[0] ? parseInt(timeParts[0], 10) : 0; // Fallback to 0 if parsing fails

      // Determine the color based on time
      if (timeAgo.includes("second") && timeValue <= 59) {
        setRelativeTimeColor("text-green-500"); // Green for 30 seconds or less
      } else if (timeAgo.includes("minute") || timeAgo.includes("hour")) {
        setRelativeTimeColor("text-rose-500"); // Red for minutes or hours ago
      } else {
        setRelativeTimeColor("text-muted-foreground"); // Default color
      }
    };

    updateRelativeTime();
    const interval = setInterval(updateRelativeTime, 1000);

    return () => clearInterval(interval);
  }, [created]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const fetchUriData = async () => {
      try {
        const response = await fetch(uri);
        if (!response.ok) {
          throw new Error(`Failed to fetch URI: ${response.statusText}`);
        }
        const uriData = await response.json();

        if (uriData.twitter) setTwitter(uriData.twitter);
        if (uriData.website) setWebsite(uriData.website);
        if (uriData.telegram) setTelegram(uriData.telegram);
      } catch (error) {
        console.error("Error fetching URI data:", error);
      }
    };

    fetchUriData();
  }, [uri]);

  useEffect(() => {
    const updateRelativeTime = () => {
      setRelativeTime(
        formatDistanceToNowStrict(new Date(created), { addSuffix: true }),
      );
    };

    updateRelativeTime();
    const interval = setInterval(updateRelativeTime, 1000);

    return () => clearInterval(interval);
  }, [created]);

  const handleCopyMintAddress = (mintadd: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (mintAddress === mintadd) {
      navigator.clipboard.writeText(mintadd).then(
        () => {
          console.log(`Copied: ${mintadd}`);
          setShowPopover(true);
          setTimeout(() => {
            setShowPopover(false);
          }, 1000);
        },
        (err) => {
          console.error("Could not copy mint address: ", err);
        },
      );
    }
  };

  const handleCLick = () => {
    router.push(`/dashboard/${mintAddress}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <tr
      onClick={handleCLick}
      className="cursor-pointer border-b border-muted/50 transition-colors hover:bg-muted/40"
    >
      <td className="flex items-center justify-start gap-2 px-4 py-2 text-sm font-normal text-foreground">
        <div className="relative h-9 w-9">
          <div
            className={`absolute inset-0 h-full w-full rounded-full bg-muted/30 ${
              isImageLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
          ></div>
          <img
            src={image}
            alt={name}
            className={`h-9 w-9 rounded-full object-cover transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
        <div className="flex flex-col justify-start gap-1">
          <div className="flex items-center justify-center gap-2">
            <div className="text-[15px]">{symbol}</div>
            <div
              className="overflow-hidden truncate text-ellipsis whitespace-nowrap text-[12px] text-muted-foreground"
              style={{ maxWidth: "50px" }}
            >
              {name}
            </div>
            <div
              id={`copy-btn-${mintAddress}`}
              onClick={(e) => handleCopyMintAddress(mintAddress, e)}
              className="relative cursor-pointer text-foreground opacity-50 transition-all hover:opacity-100"
            >
              <CopyIcon />
              {showPopover && (
                <div className="absolute left-full top-0 ml-2 text-nowrap rounded border bg-border px-2 py-1 text-sm text-primary/80">
                  Mint address copied!
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-start gap-1">
            {website && (
              <Link
                href={website || "#"}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                style={{ pointerEvents: "auto" }} // Ensure clickable links don't trigger hover
              >
                <Globe
                  size={14}
                  className="text-foreground opacity-50 transition-all hover:opacity-100"
                />
              </Link>
            )}
            {twitter && (
              <Link
                href={twitter || "#"}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                style={{ pointerEvents: "auto" }} // Ensure clickable links don't trigger hover
              >
                <XIcon />
              </Link>
            )}
            {telegram && (
              <Link
                href={telegram || "#"}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                style={{ pointerEvents: "auto" }} // Ensure clickable links don't trigger hover
              >
                <TelegramIcon />
              </Link>
            )}
          </div>
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="h-9 w-[1px] bg-muted/50" />
          <span className={relativeTimeColor}>{relativeTime}</span>
          <div className="h-9 w-[1px] bg-muted/50" />
        </div>
      </td>
      <td className="px-4 py-2">{marketCap}</td>
      <td className="px-4 py-2">{formatLargeNumber(volume)}</td>
      <td className="px-4 py-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary/40 text-sm font-normal text-primary/80 transition hover:bg-primary/10 hover:text-primary"
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = `https://jup.ag/swap/USDC-${mintAddress}`;
            console.log("Quick Buy", mintAddress);
          }}
        >
          BUY/SELL
        </Button>
      </td>
    </tr>
  );
};

export default TokenRow;
