'use client'

import { usePathname } from "next/navigation"

const titles: Record<string, string> = {
  "/": "Thought Records",
  "/chat": "Chat with CopePilot",
  "/insights": "Insights & Trends",
}

function PageHeader () {

    const path = usePathname()

    const title = titles[path] || "CopePilot"

    return (
        <header className="h-[20vh] py-20 flex items-start">
            <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
        </header>
    )
}

export default PageHeader