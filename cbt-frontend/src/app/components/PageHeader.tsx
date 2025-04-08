'use client'

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const titles: Record<string, string> = {
    "/": "Thought Records",
    "/chat": "Chat with CopePilot",
    "/insights": "Insights & Trends",
}

function PageHeader({ fadeOutTitle, description }) {
    const path = usePathname()
    const [displayed, setDisplayed] = useState("")
    const [stage, setStage] = useState<"start" | "fadeOut" | "typing" | "final">("start")
    const [mounted, setMounted] = useState(false)

    const title = titles[path] || "CopePilot"

    useEffect(() => {
        setMounted(true)

        const fadeTimer = setTimeout(() => setStage("fadeOut"), 2000)
        const typeTimer = setTimeout(() => setStage("typing"), 2700)
        const doneTimer = setTimeout(() => setStage("final"), 5500)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(typeTimer)
            clearTimeout(doneTimer)
        }}, [])

        useEffect(() => {
            if (stage === "typing") {
                let i = 0
                const interval = setInterval(() => {
                    setDisplayed(title.slice(0, i + 1))
                    i++
                    if (i === title.length) {
                        clearInterval(interval)
                    }
                }, 50)

                return () => clearInterval(interval)
            }
    }, [stage, title])

    if (!mounted) return null

    return (
    <div className="flex flex-col h-[20vh] pt-20 pb-30">
        <header className="flex items-start pb-3 w-auto font-bold text-3xl text-[var(--color-text-title)]">
            {stage === "start" && <h1 className="opacity-100">{fadeOutTitle}</h1>}
            {stage === "fadeOut" && <h1 className="opacity-0 transition-opacity duration-700">{fadeOutTitle}</h1>}
            {stage === "typing" && (
                <h1>
                {displayed}
                <span className="animate-pulse ml-1">|</span>
                </h1>
            )}
            {stage === "final" && <h1>{title}</h1>}
        </header>
        <span>{description}</span>
    </div>
    )
}

export default PageHeader
