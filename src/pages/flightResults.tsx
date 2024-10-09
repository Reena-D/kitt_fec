"use client"

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

import HomeSearch from "@/components/ReusableComponents/HomeSearch";
import ResultPage from "@/components/ReusableComponents/ResultPage";
import SkeletonLoader from "@/components/ReusableComponents/SkeletonLoader";
  
const side = "top";


function FlightResults() {

    const [loading, setLoading] = useState(true);                         
    useEffect(() => {
      const fetchData = () => {
        // delay for loading
        setTimeout(() => {
          // static data after delay
          setLoading(false); // Set loading to false 
        }, 4000);
      };
  
      fetchData();
    }, []);


    return (
        <div className="flex flex-col">
            <div className="">
            <Sheet>
                <SheetTrigger asChild className="m-4 mx-64">
                <Button className="bg-white rounded-3xl h-12 w-[652px] border-gray-300 border-[1px] outline-slate-300 hover:bg-white">
                    <div className="flex h-5 w-full gap-2.5 text-sm text-black ">
                      <h1 className="font-[500] text-lg">CDG</h1>
                      <span className="font-[400] text-lg text-slate-500">Paris Charles De Gu...</span>
                          <Separator className="" orientation="vertical"/>
                      <h1 className="font-[500] text-lg">DXB</h1>
                    <span className="font-[400] text-lg text-slate-500">Dubai International...</span>
 
                          <Separator orientation="vertical" />
                     <h1 className="font-[600] text-md">Jun 25 - Jul 2</h1>

                            <Separator orientation="vertical" />
                    <img src="vector.png" className="bg-[#e5ebeb] "/>
                     </div>
              </Button>
            </SheetTrigger>
               <SheetContent side={side} className="bg-white">
                {/* <Search/> */}
                <HomeSearch/>
              </SheetContent>
            </Sheet>
            </div>
         <div>
            { loading ? (
              <>
               <BarLoader
                 color="#3A6889"
                 cssOverride={{
                 color: 'linear-gradient(to right, #3A688980, #3A6889, #3A688980)'
                 }}
                height={5}
                width={"100%"}
               />
             <div className="flex justify-center items-center">
                 <Loader/>
                   <div className="flex flex-col mt-10">
                     <div className="flex justify-center items-center relative w-full m-4
                         border-solid border-[1px] border-[#E6E8EB] rounded-[7px]  divide-y-2 md:divide-y-0  duration-200 hover:bg-zinc-100 cursor-pointer flex-col md:flex-row">
                   <SkeletonLoader/>
                     </div>
                   <div className="flex justify-center items-center relative m-4
                               border-solid border-[1px] border-[#E6E8EB] rounded-[7px]  divide-y-2 md:divide-y-0  duration-200 hover:bg-zinc-100 cursor-pointer flex-col md:flex-row">
                    <SkeletonLoader/>
              </div>
                     <div className="flex justify-center items-center relative m-4
                         border-solid border-[1px] border-[#E6E8EB] rounded-[7px]  divide-y-2 md:divide-y-0  duration-200 hover:bg-zinc-100 cursor-pointer flex-col md:flex-row">
                   <SkeletonLoader/>
              </div>
          </div>
     </div>
           </>
            ) : (
              <>
                    <Separator className="m-4"/>
                        <h2 className="m-8 mx-60 text-[#787b80] font-normal text-lg">Showing 356 of 767 results</h2> 
                           <div className="flex flex-col justify-center items-center gap-7">
                                <ResultPage/>
                                <ResultPage/>
                                <ResultPage/>
                          </div>
 </>
             )
          }
          </div>
        </div>
    )
}

export default FlightResults;