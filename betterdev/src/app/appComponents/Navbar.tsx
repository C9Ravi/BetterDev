import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Star } from "lucide-react"

export default function Navbar() {
  return (
    <nav 
      className="
        h-full w-[95%] flex items-center justify-between p-4  
        sm:h-full sm:w-[70%] sm:flex sm:items-center sm:justify-between sm:p-8
        md:h-full md:w-[70%] md:flex md:items-center md:justify-between md:p-6">
      <Link 
        href="/" 
        className="
          text-2xl font-bold text-[#7C3AED]  
          sm:text-2xl sm:font-bold sm:text-[#7C3AED]
          md:text-2xl md:font-bold md:text-[#7C3AED]">
        BetterDev
      </Link>
      <div 
        className="
          flex items-center gap-x-3 gap-y-8  
          sm:flex sm:items-center sm:gap-x-4 sm:gap-y-8
          md:flex md:items-center md:gap-x-4 md:gap-y-8">
      </div>
    </nav>
  )
}