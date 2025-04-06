'use client'

import type { InsightSectionProps } from "@/types/types"

function InsightSection ({title, children}: InsightSectionProps) {

    return (
        <div className="flex flex-col h-400">
            <h2 className="">{title}</h2>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default InsightSection