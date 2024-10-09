import HomeSearch from "@/components/ReusableComponents/HomeSearch";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function Home() {


  return (
    <div className='w-[1200px] flex flex-col justify-center mx-60'>
        <div className='grid grid-cols-3 relative '>
            <div className=' aspect-[5/2] md:aspect-[15/7]  border-dashed border-l-[2px] border-gray-300  '></div>
            <div className='aspect-[15/7]  border-dashed border-l-[2px] border-r-[2px] border-gray-300 -'></div>
            <div className='aspect-[15/7] border-dashed border-r-[2px] border-gray-300 '></div>
                 <h2 className='col-span-3 text-[1.5rem] md:text-[2.4rem] w-full text-center absolute bottom-4'>
                  Good afternoon, Brian
                 </h2>
         </div>
               <Card className="h-64">
                   <CardHeader>
                      <CardTitle className='bg-[#F5F7FA] font-semibold rounded-md p-3 px-10 tracking-wide w-36'>Flights</CardTitle>
                  </CardHeader>
                    <CardContent>
                      <HomeSearch/>
                    </CardContent>
                </Card>
     </div>
  );
}
