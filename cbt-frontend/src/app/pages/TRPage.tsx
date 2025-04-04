'use client';

import TRForm from "@/app/components/TRForm"
import { Button } from "antd"

import React, { useState } from "react" 

function TRPage () {

    const saveFormData = () => {

        // write to csv file
        console.log(formData)


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