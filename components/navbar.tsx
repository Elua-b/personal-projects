"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Portfolio" },
    { href: "#vision", label: "Vision" },
    { href: "#stats", label: "Stats" },
    { href: "#contact", label: "Contact" },
  ]

  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="#hero" className="font-heading text-lg font-bold tracking-tight">
          <span className="text-accent">Eloi</span>dev
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="font-heading">
                  <span className="text-accent">Eloi</span>dev
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
