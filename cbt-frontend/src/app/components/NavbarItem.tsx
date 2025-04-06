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
                    isActive ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'
                  }`}
            >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
            </Link>
        </li>

    )
}

export default NavbarItem