"use client"
import { useState,useEffect } from "react";
import { Counter } from "./Counter";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
export const GuestDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      setIsOpen(false);
  }, []);

  return (
    <div className='relative'>
        <Button variant="active" className="w-full items-start text-darkText" onClick={() => {setIsOpen(!isOpen)}}>
            Guests
        </Button>

        {isOpen && (
            <Card className='w-[340px] absolute top-[40px] rounded-sm  px-4 py-6 z-10 bg-white'>
                <div className="flex justify-between">
                    <div>
                        <div className="text-md text-darkText font-semibold mb-1">Adults</div>
                        <div className="text-mediumText text-sm mb-4">Age 13+</div>
                    </div>
                    <Counter value={1} onChange={()=>{}}/>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="text-md text-darkText font-semibold mb-1">Children</div>
                        <div className="text-mediumText text-sm mb-4">Ages 2-12</div>
                    </div>
                    <Counter value={1} onChange={()=>{}}/>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="text-md text-darkText font-semibold mb-1">Infants</div>
                        <div className="text-mediumText text-sm mb-4">Under 2</div>
                    </div>
                    <Counter value={1} onChange={()=>{}}/>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="text-md text-darkText font-semibold mb-1">Pets</div>
                        <div className="text-darkText text-sm mb-4 underline">Bringing a service animal?</div>
                    </div>
                    <Counter value={1} onChange={()=>{}}/>
                </div>
                <div className="my-4 font-thin text-xs text-mediumText">
                    This place has a maximum of 8 guests, not including infants. 
                </div>
                <Button variant = {"active"} onClick={() => {setIsOpen(false)}} className="w-full text-md items-end text-darkText font-semibold underline">Close</Button>
            </Card>
        )}
    </div>
  )
}

