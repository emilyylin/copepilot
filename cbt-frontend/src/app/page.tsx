'use client';

import TRForm from "@/app/components/TRForm"
import TRCard from "@/app/components/TRCard";
import type { ThoughtRecord } from "@/types/types";

import { Button } from "antd"

import React, { useState, useEffect } from "react" 

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

export default function Home() {

    const [ trcards, setTRCards ] = useState<ThoughtRecord[]>([])

    // load thought records on mount
    // todo: make custom hooks
    useEffect(() => {
        const fetchThoughtRecords = async () => {
            try {
                const res = await fetch(`${url}/thoughtRecords`)
                const data = await res.json();
                
                setTRCards(data)

            } catch ( err ) {
                console.error("Failed to fetch thought records: ", err)
            } 
        }
        fetchThoughtRecords();
    }, [])

    const saveFormData = async () => {
        // write to backend json
        try {
            await fetch(`${url}/saveThoughtRecord`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData }),
            })
        } catch ( err ) {
            console.error("Failed to save thought record: ", err)
        }

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
            <div className="">
                {trcards.map((tr, i) => (
                    <TRCard tr={tr} key={i}/>
                ))}

            </div>
        </div>
    );
}
