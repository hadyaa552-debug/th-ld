"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"

const menuItems = [
  { name: "Armonia", id: "armonia" },
  { name: "Kukun", id: "kukun" },
  { name: "Il Bayou", id: "ilbayou" },
  { name: "عن TLD", id: "about" },
  { name: "تواصل معنا", id: "contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const phoneNumber = "+201119770408"
  const displayNumber = "01119770408"

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-lg shadow-lg" : "bg-white/95 backdrop-blur-md shadow-sm"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col items-start hover:opacity-80 transition-opacity">
            <span className={`text-xl font-bold tracking-widest transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}>TLD</span>
            <span className="text-xs text-primary tracking-wider">The Land Developers</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 absolute right-1/2 translate-x-1/2">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className="font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground hidden sm:block">للاستفسار والحجز</span>
              <a href={`tel:${phoneNumber}`}
                className="text-base lg:text-lg font-bold text-primary hover:text-primary/80 transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 sm:hidden" />
                <span dir="ltr">{displayNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
