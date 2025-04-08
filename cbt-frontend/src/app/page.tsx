'use client';

import TRForm from "@/app/thoughtrecord/TRForm"
import PageHeader from "@/app/components/PageHeader"
import Button from "@/app/components/Button";
import type { ThoughtRecord } from "@/types/types";

import React, { useState, useEffect } from "react" 
import TRCardSection from "./thoughtrecord/TRCardSection";

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

export default function Home() {

    const [ trcards, setTRCards ] = useState<ThoughtRecord[]>([])
    const [formVisible, setFormVisible] = useState(false)

    const fetchThoughtRecords = async () => {
        try {
            const res = await fetch(`${url}/thoughtRecords`)
            const data = await res.json();
            
            setTRCards(data)

        } catch ( err ) {
            console.error("Failed to fetch thought records: ", err)
        }

    }

    // load thought records on mount
    // todo: make custom hooks
    useEffect(() => { 
        fetchThoughtRecords()
    }, [])

    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1 overflow-y-auto px-25 pb-20"> 
                <div className="flex flex-row justify-between items-center">
                    
                    < PageHeader
                        fadeOutTitle="Welcome!"
                        description="Your reflections show up here. You're doing the work :)"
                    />
                    
                    < Button
                        onClick={()=>setFormVisible(true)}
                        text="New Reflection"
                    />
                </div>
            
                <div className="">
                    {formVisible && <TRForm setVisible={setFormVisible} fetchTRs={fetchThoughtRecords}/>}
                </div>
                <div className="w-full max-w-7xl mx-auto">
                    <TRCardSection trcards={trcards}/>
                </div>
                
            </div>
        </div>
    );
}
