"use client"

import { TabProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"


const Tab : React.FC<TabProps> = ({className , navItem}) => {
  const pathname = usePathname()


  return (
    <Link href={navItem.route} className={`${pathname === navItem.route && 'bg-[#ffe6b9]'} flex items-center gap-5  p-2 px-2.5 rounded-lg transition-all duration-200 hover:bg-[#fdd589] ${className}`}>
        <Image src={navItem.icon}
               alt={navItem.name}
               width={20}
               height={20}
        />
        <p>{navItem.name}</p>
    </Link>
  )
}

export default Tab
