import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { LayoutDashboard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const Items = [
    {
        name: "Stofan",
        href: "/about-us"
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
    <div className='grid grid-cols-3 fixed z-60 top-0 left-0 right-0 items-center h-[100px] px-10 py-5 bg-white/20 backdrop-blur-md'>
        <div className='justify-self-start items-center align-center ml-10 text-2xl text-white font-bold'>
            <Image
            src="/svg/multi-navy.svg"
            width={160}
            height={160}
            className=""
            alt="Logo"
            />
        </div>

        <div className='justify-self-center flex flex-row gap-10 text-engi-navy-100'>
            
                {Items.slice(0, 3).map((item) => (
                    <Link 
                        className="cursor-pointer relative after:absolute after:-bottom-[8px] after:left-1/2 after:h-[1px] after:w-0 after:bg-green-500 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full" 
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
            <LayoutDashboard className="w-[25px] h-[25px] font-light cursor-pointer text-engi-navy-100" />
            <Search className="w-[25px] h-[25px] font-light cursor-pointer text-engi-navy-100" />
            <Button className="w-[200px] h-[50px]" variant="glass">Skoða meira</Button>
        </div>

        <ScrollProgress className="top-[100px]" />
    </div>
  )
}

export default NavBar