'use client'

import { Bar, Doughnut } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import React, { useEffect, useState } from "react"

import Graph from "@/app/insights/component/Graph"
import StatSection from "@/app/insights/component/StatsSection";
import PageHeader from "@/app/components/PageHeader"

import type { TimeStats } from "@/types/types"

import { transformDistortionData, transformCoreBeliefData, transformDayAndHourData} from '@/utils/chart';

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement)

function InsightsPage () {

    const [ distortionData, setDistortionData ] = useState<{ label: string; value: number }[]>([])
    const [ coreBeliefsData, setCoreBeliefsData ] = useState<{ label: string; value: number }[]>([])
    const [ timeStats, setTimeStats ] = useState<TimeStats>({
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
            const res = await fetch(`${url}/insights/cbfreq`)
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

    // fetch data for graphs
    useEffect(() => {
        fetchTime();
        fetchDistortions();
        fetchCoreBeliefs();
    }, [])

    const distortionChartData = transformDistortionData(distortionData)
    const pieChartData = transformCoreBeliefData(coreBeliefsData)
    const { dayChartData , hourChartData } = transformDayAndHourData(timeStats)

    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1 overflow-y-auto px-25 pb-20"> 
                < PageHeader
                    fadeOutTitle="Let's take a step back..."
                    description="Patterns don’t lie. Here is what has been showing up."
                />
                <div className="flex flex-col gap-10">
                    <StatSection />
                    
                    <div className="flex flex-row justify-between gap-10 h-full">
                        <div className="flex-grow max-w-full sm:max-w-[80%]">
                            <Graph title="Most Frequent Cognitive Distortion" insight={"Your most frequent"}>
                                <Bar
                                    data={distortionChartData}     
                                    options={{
                                        plugins: {
                                            legend: { display: false },
                                            tooltip: { titleFont: { size: 14 }, bodyFont: { size: 12 } }
                                        }
                                    }}
                                />
                            </Graph>
                        </div>
                        <div className="flex-shrink-0 ">
                            <Graph title="Core Beliefs Visualization" insight="dfsd">
                                <Doughnut
                                    data={pieChartData}     
                                    options={{
                                        plugins: {
                                            legend: { display: false },
                                            tooltip: { titleFont: { size: 14 }, bodyFont: { size: 12 } }
                                        }
                                    }}
                                />
                            </Graph>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-10">
                        <div className="flex-grow sm:max-w-[50%]">
                            <Graph title="Thought Records by Hour"  insight="dfds">
                                <Bar
                                    data={hourChartData}     
                                    options={{
                                        plugins: {
                                            legend: { display: false },
                                            tooltip: { titleFont: { size: 14 }, bodyFont: { size: 12 } }
                                        }
                                    }}
                                />
                            </Graph>
                        </div>
                        <div className="flex-grow sm:max-w-[50%]">
                            <Graph title="Thought Records by Day"  insight="dsfds">
                                <Bar
                                    data={dayChartData}     
                                    options={{
                                        plugins: {
                                            legend: { display: false },
                                            tooltip: { titleFont: { size: 14 }, bodyFont: { size: 12 } }
                                        }
                                    }}
                                />
                            </Graph>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default InsightsPage