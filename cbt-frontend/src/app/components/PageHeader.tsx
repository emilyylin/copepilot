'use client'

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const titles: Record<string, string> = {
  "/": "Thought Records",
  "/chat": "Chat with CopePilot",
  "/insights": "Insights & Trends",
}

function PageHeader ({fadeOutTitle, description}) {

    const path = usePathname()
    const [ stage, setStage ] = useState<"start" | "fadeOut" | "typing" | "final">("start")
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        //show welcome thing, fade out
        setMounted(true)
        const fadeTimer = setTimeout(() => setStage("fadeOut"), 2000)
        const typeTimer = setTimeout(() => setStage("typing"), 2700)
        const doneTimer = setTimeout(() => setStage("final"), 5500)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(typeTimer)
            clearTimeout(doneTimer)
        }
    }, [])

    // TO DO: FIX WEIRD HYDRATION
    if (!mounted) return null 

    const title = titles[path] || "CopePilot"

    return (
        <div className="flex flex-col h-[20vh] pt-20 pb-30">
            <header className="flex items-start pb-3 w-auto font-bold text-3xl text-[var(--color-text-title)]">
                {stage === "start" && (
                    <h1 className="opacity-100 transition-opacity duration-700">{fadeOutTitle}</h1>
                )}

                {stage === "fadeOut" && (
                    <h1 className="opacity-0 transition-opacity duration-700">{fadeOutTitle}</h1>
                )}

                {stage === "typing" && (
                    <h1 className="typewriter">
                    {title}<span className="blinking-cursor"></span>
                    </h1>
                )}

                {stage === "final" && (
                    <h1 className=""> {title} </h1>
                )}

                <style jsx>{`
                    .typewriter {
                        display: inline-block;
                        overflow: hidden;
                        white-space: nowrap;
                        width: 0;
                        border-right: 2px solid #642b26;
                        animation: typing 1.5s steps(15, end) forwards;
                    }

                    .blinking-cursor {
                        animation: blink 1s step-end infinite;
                    }

                    @keyframes typing {
                        from { width: 0 }
                        to { width: 15ch }    
                    }

                    @keyframes blink {
                        0%, 100% { opacity: 1 }
                        50% { opacity: 0 }
                    }
                `}</style>
            </header>
            <span> {description} </span>
        </div>
    )
}

export default PageHeader