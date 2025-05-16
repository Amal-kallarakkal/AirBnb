import { RiMedalFill } from "react-icons/ri";
import { Card } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils"
import Image from "next/image";


type UserCardProps = {
    className?: string;
    landlord: any;
  };


export const UserCard = ({ className, landlord }: UserCardProps) => {
    return (
        <Card className = {cn('p-6 flex flex-row justify-between rounded-3xl h-46 w-56 items-center', className)}>
            <div className="flex flex-col justify-between items-center">
                <Image
                    width={144}
                    height={144}
                    className="m-5 rounded-full object-cover max-w-[150px] max-h-[150px]"
                    src="/temp.avif"
                    alt="Small Image 1"
                />
                <div className="text-xl sm:text-2xl text-darkText font-bold">
                    {landlord}
                </div>
                <div className="text-md font-bold text-lightText flex items-center">
                    <RiMedalFill className="mx-1"/>Superhost
                </div>
            </div>
            <div className="w-full p-5 flex flex-col ">
                <div className="text-xl font-bold text-darkText py-3">2891<p className="text-xs text-lightText">Reviews</p></div>
                <Separator/>
                <div className="text-xl font-bold text-darkText py-3">4.3 ★<p className="text-xs text-lightText">Rating</p></div>
                <Separator/>
                <div className="text-xl font-bold text-darkText py-3">9<p className="text-xs text-lightText">years hosting</p></div>
            </div>
        </Card>
    );
}