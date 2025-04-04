'use client';

import TRForm from "@/app/components/TRForm"
import { Button } from "antd"

import React, { useState } from "react" 

function TRPage () {

    const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

    const saveFormData = () => {

        // write to csv file
        fetch(`${url}/saveThoughtRecord`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formData }),
        })

        // close form
        setFormVisible(false)

        // clear form data on save
        setFormData({
            situation: '',
            thought: '',
            behavior: '',
            emotions: [],
        })
    }

    const [formData, setFormData] = useState({
        situation: '',
        thought: '',
        behavior: '',
        emotions: [],
    });


    const [formVisible, setFormVisible] = useState(false)

    return (
        <div className="flex flex-col"> 
            <div className="flex flex-row">
                <Button onClick={()=>{setFormVisible(true)}}>Add Thought Record</Button>
            </div>
            <div className="">
                {formVisible && <TRForm formData={formData} setFormData={setFormData} saveFormData={saveFormData}/>}
            </div>
        </div>
    );
}

export default TRPage