import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { UserCard } from "@/components/User/UserCard";
import Link from "next/link";

export const HostDetails = ({landlord }: {landlord:any}) => {
  return (
    <div>
      <div className="flex-row py-12 lg:flex">
                
                <div className="flex flex-col justify-center min-w-[325px] max-w-[400px] ">
                    <div className="text-2xl font-semibold text-darkText">Meet your host</div>
                    <UserCard className="my-4 w-[345px] sm:w-[400px] h-[280px]" landlord = {landlord?.name}/>
                    <div className="my-4">
                    </div>
                    <div className="py-2">Zostel is India's first and largest chain of budget hostels for the sociable explorer. Our properties....</div>
                    <Link href = "/user/1" className="text-darkText font-semibold underline">Show more</Link>
                </div>

                <div className = "flex flex-col py-10 lg:px-24 lg:py-20 ">
                    <Separator className="lg:invisible"/>
                    <div className="text-xl font-semibold mt-8 lg:mt-0">
                        Host details
                    </div>
                    <div className="text-lg mt-4 ">
                        Response rate: 98%
                    </div>
                    <div className="text-lg mb-6">
                        Responds within an hour
                    </div>
                    
                    <Button variant={"outline"} size={"lg"} className= "bg-gray-800 h-12 outline-0 font-semibold text-md w-1/2 mb-6 hover:bg-gray-900 text-white rounded-lg">
                        Message Host
                    </Button>
                    <div className="text-lg mb-4">
                        Registration number: HOTN005387md 
                    </div>

                    <Separator/>

                </div>
            </div>
    </div>
  )
}

