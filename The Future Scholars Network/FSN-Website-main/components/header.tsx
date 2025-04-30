"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="bg-[#2B2D42] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              <span className="text-[#C2A78F]">FSN</span> Network
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`transition-colors ${
                      isActive(item.path) ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <Link href="/donate">
              <Button className="bg-[#A47149] hover:bg-[#8a5e3c] text-white">Donate Now</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button type="button" className="text-white/80 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 text-base font-medium ${
                  isActive(item.path) ? "text-white" : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/donate" className="w-full block">
                <Button className="w-full bg-[#A47149] hover:bg-[#8a5e3c] text-white">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
