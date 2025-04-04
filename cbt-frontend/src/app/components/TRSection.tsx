'use client'

import React from "react"
import { Input } from "antd"

function TRSection ({value, question, setValue}) {
    const { TextArea } = Input;

    return (
        <>
            {question}
            <TextArea 
                rows={6}
                maxLength={500}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );

}

export default TRSection