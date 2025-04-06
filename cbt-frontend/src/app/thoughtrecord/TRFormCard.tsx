'use client'

import React from "react"
import { Input } from "antd"

function TRFormCard ({value, question, setValue, placeholder, prompt}) {
    const { TextArea } = Input;

    return (
        <div className="py-3">
            <p className="text-sm font-semibold">{question}</p>
            <p className="pb-4 text-xs text-gray-400" >{prompt}</p>

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