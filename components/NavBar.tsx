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
    <div className='grid grid-cols-3 items-center rounded-full m-10 h-[70px] px-5'>
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
            <LayoutDashboard className="w-[25px] h-[25px] font-light cursor-pointer text-engi-navy-100" />
            <Search className="w-[25px] h-[25px] font-light cursor-pointer text-engi-navy-100" />
            <Button className="w-[200px] h-[50px]" variant="glass">Skoða meira</Button>
        </div>
    </div>
  )
}

export default NavBar