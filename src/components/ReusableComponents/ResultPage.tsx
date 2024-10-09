

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react";
import Timeline from "./Timeline";



function ResultPage ()  {

    const sidel = "right";

    return (
      
  <div className='  border-solid border-[1px] border-[#E6E8EB] rounded-[7px]  flex divide-y-2 w-[1200px]  duration-200 hover:bg-zinc-100 hover:animate-in cursor-pointer flex-col md:flex-row'>
      <div className='flex flex-col justify-between gap-8 md:w-[80%] px-2 md:px-8 py-4 md:border-r-[1px] border-[#E6E8EB] border-solid'>
          <div className='flex justify-between md:items-end items-center md:flex-row flex-col md:gap-0 gap-2'>
              <div className='flex items-start gap-1 flex-col'>
                  <div className='flex items-center gap-5'>
                      <div className='border-[1px] border-solid border-[#E6E8EB] size-[44px] flex justify-center items-center rounded-[8px] p-0.5'>
                          <Image src={"emirates.svg"} alt='emirates' width={44} height={44} className=' '/>
                      </div>
                      <div>
                          <p className='text-[#787B80] text-[13px]'>Emirates • AT 4334</p>
                          <h6 className='text-[#001F1D] text-[18px]'>9:45 AM - 11:45 AM</h6>
                      </div>
                  </div>
              </div>
              <div className='flex justify-between flex-row items-start md:items-end gap-2 w-full md:gap-10 md:w-1/3 divide-x-2 md:divide-x-0'>
                  <div>
                      <p className='text-[#787B80] text-[14px]'>CDG - DXB</p>
                      <h6 className='text-[#001F1D] text-[18px]'>2h 10min</h6>
                  </div>
                  <div className='md:w-1/2 pl-2 md:pl-0'>
                      <h6 className='text-[#001F1D] text-[18px]'>Non stop</h6>
                  </div>
              </div>
          </div>
          <div className='flex justify-between items-center md:flex-row flex-col md:gap-0 gap-2'>
              <div className='flex items-center gap-5'>
                  <div className='border-[1px] border-solid border-[#E6E8EB] size-[44px] flex justify-center items-center rounded-[8px] p-0.5'>
                          <Image src={"lufthansa.svg"} alt='emirates' width={44} height={44} className=' '/>
                      </div>
                  <div className='relative'>
                      <p className='text-[#787B80] text-[13px] font-medium'>Lufthansa • AT 4334</p>
                      <h6 className='text-[#001F1D] text-[18px] font-medium'>9:45 AM - 11:45 AM</h6>
                      <span className='absolute  text-[#962828F9] text-[12px] font-[600] top-0 right-0 md:top-[45%]   md:-right-[28%] md:bottom-[20%]'>+1 day</span>
                  </div>
              </div>
              <div className='flex justify-start md:justify-between items-start divide-x-2 md:divide-x-0 md:items-end gap-2 md:gap-10 w-full md:w-1/3'>
                  <div>
                      <p className='text-[#787B80] text-[14px]'>DXB - CDG</p>
                      <h6 className='text-[#001F1D] text-[18px]'>4h 10min</h6>
                  </div>
                  <div className='md:w-1/2 pl-2 md:pl-0'>
                  <p className='text-[#787B80] text-[14px]'>6h 32m in Lisbon, P...</p>
                      <h6 className='text-[#001F1D] text-[18px]'>2 stops</h6>
                  </div>
              </div>
          </div>
      </div>
      <div  className='md:w-[20%] flex justify-center items-end px-2 md:mt-12 py-2 w-full h-full'>
          <div className='flex flex-col gap-4 w-full h-full'>
              <div className='px-2'>
                  <p className='text-[#787B80] text-[14px]'>from</p>
                  <h6 className='text-[#001F1D] text-[18px]'>AED 2,456.90</h6>
              </div>
              <Sheet>
                 <SheetTrigger asChild>
                 <Button className='bg-[#003E39] hover:bg-[#003E39] w-[95%] mx-auto text-[18px] font-[500] ' >
                 Select
                 </Button>
                 </SheetTrigger>
                 <SheetContent side={sidel} className="bg-white min-w-[40vw]">
                 <SheetClose className='size-[28px] p-1 flex justify-center items-center focus:outline-none bg-[#F5F7FA] rounded-full'>
                     <ArrowLeft color='#484A4D'/>
                 </SheetClose>
              <div className='text-[20px] border-b-[1px] py-5 min-h-fit border-[#E6E8EB] pt-6 font-[500]'>
                   <h3>Flights Details</h3>
              </div>
           <div>
             <Timeline/>
      </div>
             </SheetContent>
              </Sheet>
          </div>
      </div>
  </div>
    )
  }

  export default ResultPage;