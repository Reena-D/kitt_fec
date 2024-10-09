import { Circle, Clock4 } from "lucide-react";
import Image from "next/image";





function Timeline () {
    return (
      <div className='my-5 flex flex-col gap-1'>
          <div className=' flex items-center gap-3'>
              <Circle size={14}/>
              <span className='text-[#787B80] text-[13px] mt-1'>Sat 28 Sept • 2:15</span>
          </div>
          <div className=' border-l-[2px] ml-1.5 border-solid border-[#000C0B] '>
              <div className='flex justify-between px-2 pl-[1.2rem] mb-2'>
                  <h5 className='text-[16px] text-[#001F1D] font-semibold'>DXB • Dubai International Airport</h5>
                  <div className='flex items-start gap-3'>
                      <div className='border-[1px] border-solid border-[#E6E8EB] size-[30px] flex justify-center items-center rounded-[8px] p-0.5'>
                          <Image src={"lufthansa.svg"} alt='emirates' width={30} height={30} className=' '/>
                      </div>
                      <div className='text-[13px] text-[#484A4D] '>
                          <p>Saudi Arabian Airlines • SV553</p>
                          <p>Economy • A330</p>
                          <p>Flight time 3h 45m</p>
                      </div>
                  </div>
              </div>
          </div>
  
          {/* layover  */}
          <div className=' flex items-center gap-3'>
              <Circle size={14}/>
              <span className='text-[#787B80] text-[13px] mt-1'>Sat 28 Sept • 2:15</span>
          </div>
          <div className=' border-l-[2px] ml-1.5 border-dashed border-[#787B80] '>
              <div className='flex flex-col justify-between px-2 pl-[1.2rem] mb-2 w-full'>
                  <h5 className='text-[16px] text-[#001F1D] font-semibold w-1/3'>RUH • King Khalid International Airport</h5>
                  <div className='flex items-center gap-1 my-8 mx-6'>
                      <Clock4 className='size-[13.8px] text-[#787B80]' />
                      <span className='text-[#787B80] text-[14px]'>Layover 2h 25m</span>
                  </div>
              </div>
          </div>
          <div className=' flex items-center gap-3'>
              <Circle size={14}/>
              <span className='text-[#787B80] text-[13px] mt-1'>Sat 28 Sept • 2:15</span>
          </div>
          <div className=' border-l-[2px] ml-1.5 border-solid border-[#000C0B] '>
              <div className='flex justify-between px-2 pl-[1.2rem] mb-2 w-full '>
                  <h5 className='text-[16px] text-[#001F1D] font-semibold w-1/3'>RUH • King Khalid International Airport</h5>
                  <div className='flex items-start gap-3'>
                      <div className='border-[1px] border-solid border-[#E6E8EB] size-[30px] flex justify-center items-center rounded-[8px] p-0.5'>
                          <Image src={"lufthansa.svg"} alt='emirates' width={30} height={30} className=' '/>
                      </div>
                      <div className='text-[13px] text-[#484A4D] '>
                          <p>Saudi Arabian Airlines • SV553</p>
                          <p>Economy • A330</p>
                          <p>Flight time 3h 45m</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className=' flex items-center gap-3'>
              <Circle size={14}/>
              <span className='text-[#787B80] text-[13px] mt-1'>Sat 28 Sept • 2:15</span>
          </div>
          <div className=' ml-1.5'>
              <div className='flex justify-between px-2 pl-[1.2rem] mb-2 w-full '>
                  <h5 className='text-[16px] text-[#001F1D] font-semibold w-1/3'>CDG • Paris - Charles de Gualle Airport</h5>
              </div>
          </div>
      </div>
    )
  }

  export default Timeline;
