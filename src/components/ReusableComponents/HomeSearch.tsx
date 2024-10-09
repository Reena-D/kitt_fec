"use client"

import { Button } from "@/components/ui/button"


import { useRouter } from 'next/router'

import * as React from "react"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftRight } from "lucide-react"

import flightsData from '@/lib/db.json'

import { useState } from "react"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"




interface flightsData {
  city: string;
  country: string;
  code: string;
  name: string;
}


function HomeSearch () {

    const router = useRouter();

    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);

    const [isFocusedFrom, setIsFocusedFrom] = useState(false);
    const [isFocusedTo, setIsFocusedTo] = useState(false);

    const [selectedItem, setSelectedItem] = useState("");

    const handleSelect = (value:string) => {
      // Get the selected item details from the data array
      const selected = flightsData.airports.find((location) => location.code === value);
  
      if (selected) {
        setSelectedItem(`${selected.city}, ${selected.country} - ${selected.code}`);
        
      }
    };

    const [dateFrom, setDateFrom] = React.useState<Date>();
    const [dateTo, setDateTo] = React.useState<Date>()

 

 
 return (
    <>
       
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="relative w-72 flex justify-between items-center mx-auto">
      {/* Floating Label */}
       {!selectedItem && (
      <label
        className={`absolute  transition-all duration-200 ease-in-out mx-8 px-2
          ${isFocusedFrom || selectedItem ? "-translate-y-4 text-xs text-[#484a4d]" : "text-[#484a4d] text-lg"}
        `}
      >
        Where from?
      </label>)
      }
            <Select  onValueChange={(value) =>{ handleSelect(value); setIsFocusedFrom(true);}} onOpenChange={(open) =>{ {if(open) setIsFocusedFrom(open)} setIsOpenFrom(open)} }// Track open/close state
            >
              <SelectTrigger className="w-64 ">
                
                  <img src="mark.png" alt="location-mark" width={20} height={20} className="text-[#c9cacc]"/>
                  <SelectValue className="m-4 p-4"/>
                 
        {/* Rotate the arrow icon based on open/close state */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5  transition-transform ${isOpenFrom ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
                
              </SelectTrigger>
              <SelectContent>
                {
                   flightsData.airports.map(airport => (
                    <SelectItem key={airport.code} value={airport.name} className="">
                      <div className="flex flex-row gap-2  m-1.5">
                        <div className="flex flex-col">
                        <h1 className="font-neueMontrealMedium font-semibold text">{airport.city}</h1>   
                        <h2 className="text-slate-500">{airport.country}</h2>
                        </div>                                         
                        <h1 className="font-neueMontreal font-semibold justify-end">{airport.code}</h1>
                      </div>
                    </SelectItem>
                ))}
                
              </SelectContent>
            </Select>
            </div>
            <div className="flex items-center justify-center mx-2">
              <ArrowLeftRight className="h-5 w-6 text-[#001f1d] m-1 bg-[#c9cacc] rounded-full" />
            </div>


            <div className="relative w-72 flex justify-between items-center">
      {/* Floating Label */}
       {!selectedItem && (
      <label
        className={`absolute  transition-all duration-200 ease-in-out mx-8 px-2
          ${isFocusedTo || selectedItem ? "-translate-y-4 text-xs text-[#484a4d]" : "text-[#484a4d] text-lg"}
        `}
      >
        Where to?
      </label>)
      }
            <Select  onValueChange={(value) =>{ handleSelect(value); setIsFocusedTo(true);}} onOpenChange={(open) =>{ {if(open) setIsFocusedTo(open)} setIsOpenTo(open)}} // Track open/close state
            >
              <SelectTrigger className="w-64 ">
                
                  <img src="mark.png" alt="location-mark" width={20} height={20} className="text-[#c9cacc]"/>
                  <SelectValue className="m-4 p-4"/>
                 
        {/* Rotate the arrow icon based on open/close state */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5  transition-transform ${isOpenTo ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
                
              </SelectTrigger>
              <SelectContent>
                {
                   flightsData.airports.map(airport => (
                    <SelectItem key={airport.code} value={airport.name} className="">
                      <div className="flex flex-row gap-2  m-1.5">
                        <div className="flex flex-col">
                        <h1 className="font-neueMontrealMedium font-semibold text">{airport.city}</h1>   
                        <h2 className="text-slate-500">{airport.country}</h2>
                        </div>                                         
                        <h1 className="font-neueMontreal font-semibold justify-end">{airport.code}</h1>
                      </div>
                    </SelectItem>
                ))}
                
              </SelectContent>
            </Select>
            </div>

        <>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " justify-start text-left font-normal w-44 h-16 mx-14",
            !dateFrom && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateFrom ? format(dateFrom, "PPP") : <span className="text-[#484a4d] text-lg">Departure</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={dateFrom}
          onSelect={setDateFrom}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </>


    <>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " justify-start text-left font-normal w-44 h-16 mx-6",
            !dateTo && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateTo ? format(dateTo, "PPP") : <span className="text-[#484a4d] text-lg">Return</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={dateTo}
          onSelect={setDateTo}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    
    </>
            {/* <Input type="date" placeholder="Departure" className="w-44 h-16 mx-14" />
            <Input type="date" placeholder="Return" className="w-44 h-16 mx-6" /> */}
            
          </div>
          {/* <Button className="w-full mt-4 bg-teal-700 hover:bg-teal-800">
            Search flights
          </Button> */}
          <div className="flex justify-end m-2">
           <Button  onClick={() => router.push('/flightResults')} className="w-60 h-12 rounded-lg font-medium text-md mt-4 bg-[#003e39] hover:bg-teal-800">
            <img src="search.png" alt="Search" className="m-2"/>
            Search flights
           </Button>
   </div>
       
    </>
)

}

export default HomeSearch;
