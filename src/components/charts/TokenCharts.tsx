"use client";

import {
  ColorType,
  createChart,
  type Time,
  type IChartApi,
  type ISeriesApi,
} from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

interface Candle {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface CandleResponse {
  candles: Candle[];
}

interface TokenChartsProps {
  mintAddress: string | null;
}

const TokenCharts: React.FC<TokenChartsProps> = ({ mintAddress }) => {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [intervel, setIntervel] = useState<
    | "15_SECOND"
    | "30_SECOND"
    | "1_MINUTE"
    | "5_MINUTE"
    | "15_MINUTE"
    | "30_MINUTE"
    | "1_HOUR"
    | "2_HOUR"
    | "5_HOUR"
    | "1_DAY"
    | "1_WEEK"
    | "1_MONTH"
  >("30_SECOND");

  useEffect(() => {
    const fetchFunc = async () => {
      // const mintAddress = mintAddress;

      const resp = await fetch(
        `https://api.ape.pro/api/v2/charts/${mintAddress}?interval=${intervel}&baseAsset=${mintAddress}&quote=fiat%2Fusd&from=${Date.now() - 1e10}&to=${Date.now()}&candles=329&type=price`,
      );
      const data = (await resp.json()) as CandleResponse;
      setCandles(data.candles);
    };

    void fetchFunc();
  }, [intervel]);

  return (
    <div className="p-4">
      <select
        value={intervel}
        onChange={(e) => setIntervel(e.target.value as any)}
        className="p-2"
      >
        <option value="15_SECOND">15 Second</option>
        <option value="30_SECOND">30 Second</option>
        <option value="1_MINUTE">1 Minute</option>
        <option value="5_MINUTE">5 Minute</option>
        <option value="15_MINUTE">15 Minute</option>
        <option value="30_MINUTE">30 Minute</option>
        <option value="1_HOUR">1 Hour</option>
        <option value="2_HOUR">2 Hour</option>
        <option value="5_HOUR">5 Hour</option>
        <option value="1_DAY">1 Day</option>
        <option value="1_WEEK">1 Week</option>
        <option value="1_MONTH">1 Month</option>
      </select>
      <Chart candles={candles} />
    </div>
  );
};

function Chart({ candles }: { candles: Candle[] }) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart instance
    const chartOptions = {
      layout: {
        textColor: "white", // Adjusted text color to be visible on a dark background
        background: { type: ColorType.Solid, color: "black" }, // Dark background
      },
      width: chartContainerRef.current.offsetWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    // Add candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });
    candlestickSeriesRef.current = candlestickSeries;

    // Clean up chart on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (candlestickSeriesRef.current && candles.length > 0) {
      // Map and set data for candlestick series
      const scaleFactor = 1000000; // Scaling factor to represent small numbers

      const formattedData = candles.map((candle) => ({
        time: candle.time as unknown as Time, // Ensure time is formatted as `Time`
        open: parseFloat((candle.open * scaleFactor).toFixed(6)), // Multiply and format
        high: parseFloat((candle.high * scaleFactor).toFixed(6)),
        low: parseFloat((candle.low * scaleFactor).toFixed(6)),
        close: parseFloat((candle.close * scaleFactor).toFixed(6)),
      }));

      candlestickSeriesRef.current.setData(formattedData);

      chartRef.current?.timeScale().fitContent();
    }
  }, [candles]);

  return <div ref={chartContainerRef} className="h-96 w-full"></div>;
}

export default TokenCharts;
