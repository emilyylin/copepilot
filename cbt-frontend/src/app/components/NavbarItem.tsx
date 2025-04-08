'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation"

import React from 'react'

function NavbarItem ({href, label, icon}:{href: string, label: string, icon:ReactNode}) {

    const pathname = usePathname()
    const isActive = pathname === href

    return(
        <li key={href}>
            <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-[var(--color-green-hover)] text-[var(--color-highlight)]' : 'text-[var(--color-text-title)] hover:bg-[var(--color-soft-gray)]'
                  }`}
            >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
            </Link>
        </li>

    )
}

export default NavbarItem