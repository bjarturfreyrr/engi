import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { LayoutDashboard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Items = [
    {
        name: "Stofan",
        href: "/about"
    },
    {
        name: "Þjónusta",
        href: "/services"
    },
    {
        name: "Verkin",
        href: "/projects"
    },
    {
        name: "Hafa Samband",
        href: "/contact-us"
    },
]


const NavBar = () => {
  return (
    <div className='grid grid-cols-3 items-center border border-outline rounded-full m-10 bg-gradient-to-r from-engi-green-500 to-engi-blue-500 h-[70px] px-5'>
        <div className='justify-self-start items-center align-center ml-10 text-2xl text-white font-bold'>
            <Image
            src="/svg/multi-navy.svg"
            width={120}
            height={120}
            className=""
            alt="Logo"
            />
        </div>

        <div className='justify-self-center flex flex-row gap-10 text-white'>
            
                {Items.slice(0, 3).map((item) => (
                    <Link 
                        className="cursor-pointer" 
                        href={item.href} 
                        key={item.name}>
                        {item.name}
                    </Link>
                ))}
            <Separator orientation="vertical"/>
            {Items.slice(3).map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href}>
                    {item.name}
                </Link>
            ))}
        </div>
        <div className='justify-self-end flex flex-row items-center gap-5'>
            <LayoutDashboard className="w-[25px] h-[25px] text-white font-light cursor-pointer" />
            <Search className="w-[25px] h-[25px] text-white font-light cursor-pointer" />
            <Button className="w-[200px] h-[50px] rounded-full bg-blue-500 text-white hover:bg-blue-600" variant="default">Skoða meira</Button>
        </div>
    </div>
  )
}

export default NavBar