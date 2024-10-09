'use client'
import * as React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import {  ClipLoader } from "react-spinners";
import PaperPlane from "../../public/paper-plane.gif"

export const Loader = () => {
  const [loading, setLoading] = React.useState(true);
  const [ticks, setTicks] = React.useState([false, false, false]); // Array to track which ticks are shown

  React.useEffect(() => {
    const tickInterval = setInterval(() => {
      setTicks((prevTicks) => {
        const nextTicks = [...prevTicks];
        const nextIndex = nextTicks.indexOf(false);
        if (nextIndex !== -1) {
          nextTicks[nextIndex] = true; // Show the next tick
        }
        return nextTicks;
      });
    }, 1000); // Change this value to adjust the tick interval

    // Stop the interval after all ticks are shown
    const loadingTimeout = setTimeout(() => {
      clearInterval(tickInterval);
      setLoading(false); // Set loading to false after all ticks are shown
    }, 4000); // Total time for loading (3 ticks * 1000ms)

    return () => {
      clearInterval(tickInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="absolute z-10">
    
    <Card className="w-[350px] h-[370px]">
      <CardContent className="flex flex-col items-center w-full m-4">
        <Image src={PaperPlane} alt="gif" width={50} height={50} />
        <div className="w-[80%] mx-auto items-end">
          {ticks.map((tick, index) => (
            <div key={index} className="flex items-center gap-4 p-0.5 justify-start">
              {loading && !tick ? (
                <ClipLoader size={14} color="#3A6889" />
              ) : (
                <div className="rounded-full border-green-700 border-solid border-[2px] w-fit">
                  <Check strokeWidth={3} className="text-green-700 font-bold p-0.5" size={14} />
                </div>
              )}
              <span className="text-[18px] mt-0.5 text-[#787B80] tracking-wider">
                {index === 0
                  ? "Searching 400+ flights"
                  : index === 1
                  ? "Attaching company rules"
                  : "Serving best results"}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    </div>
  );
};