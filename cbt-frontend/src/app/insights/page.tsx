'use client'

import {
    ResponsiveContainer,
    PieChart, 
    Pie,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import React, { useEffect, useState } from "react"

import InsightSection from "./component/insightSection"

import type { TimeStats } from "@/types/types";

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

function InsightsPage () {


    const [ distortionData, setDistortionData ] = useState<{ label: string; value: number }[]>([])
    const [ coreBeliefsData, setCoreBeliefsData ] = useState<{ label: string; value: number }[]>([])
    const [timeStats, setTimeStats] = useState<TimeStats>({
        days: {
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
          Sunday: 0,
        },
        time: Array(24).fill(0),
      })

    // fetch data for graphs
    useEffect(() => {

        const fetchTime = async () => {
            try {
                const res = await fetch(`${url}/insights/daysOfWeek`)
                const data = await res.json();

                setTimeStats(data)

            } catch ( err ) {
                console.error("Failed to fetch time: ", err)
            }
        }

        const fetchCoreBeliefs = async () => {
            try {
                const res = await fetch(`${url}/insights/coreBeliefFreq`)
                const data = await res.json();

                setCoreBeliefsData(data)

            } catch ( err ) {
                console.error("Failed to fetch core belief frequencies: ", err)
            }
        }

        const fetchDistortions = async () => {
            try {

                const res = await fetch(`${url}/insights/distortionfreq`)
                const data = await res.json();

                setDistortionData(data)

            } catch ( err ) {
                console.error("Failed to fetch distortion frequencies: ", err)
            } 
        }

        fetchTime();
        fetchDistortions();
        fetchCoreBeliefs();

    }, [])
    

    return (
        <div className="flex flex-col h-150">
            <InsightSection title="Most Frequent Cognitive Distortion">
                <ResponsiveContainer width="50%" height={200}>
                    <BarChart data={distortionData}>
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" />
                    </BarChart>
                </ResponsiveContainer>
            </InsightSection>

            <InsightSection title="Core Beliefs Visualization">
                <ResponsiveContainer width="50%" height={200}> 
                    <PieChart>
                        <Pie
                            data={coreBeliefsData}
                            dataKey="value"
                            nameKey="label"
                            outerRadius={80}
                            fill="#8884d8"
                        />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </InsightSection>

            <InsightSection title="Thought Records by Hour">
                <ResponsiveContainer width="50%" height={200}>
                    <BarChart data={timeStats.time.map((count, hour) => ({ hour: `${hour}:00`, count }))}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </InsightSection>

            <InsightSection title="Thought Records by Day">
                <ResponsiveContainer width="50%" height={200}>
                    <BarChart data={Object.entries(timeStats.days).map(([day, count]) => ({ day, count }))}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </InsightSection>


        </div>
    )

}

export default InsightsPage