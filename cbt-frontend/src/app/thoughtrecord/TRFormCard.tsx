'use client'

import React from "react"
import { Input } from "antd"

function TRFormCard ({value, question, setValue, placeholder, prompt}) {
    const { TextArea } = Input;

    return (
        <div className="flex flex-col gap-1 py-2">
            <p className="text-lg font-semibold text-[var(--color-text-title)]">{question}</p>
            <p className="pb-4 text-xs text-[var(--color-text-muted)]" >{prompt}</p>

            <TextArea 
                rows={6}
                maxLength={500}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );

}

export default TRFormCard