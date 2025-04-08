import { getRandomChartColor } from "@/utils/colors"

// may or may not have used chatgpt for this file :D

export function transformDistortionData(raw: { label: string, value: number }[] = []) {
    return {
        labels: raw.map(d => d.label),
        datasets: [
        {
            label: 'Cognitive Distortions',
            data: raw.map(d => d.value),
            backgroundColor: raw.map(() => getRandomChartColor()),
            borderRadius: 6,
        },
        ],
    }
}

export function transformCoreBeliefData(raw: { label: string, value: number }[] = []) {
    return {
        labels: raw.map(d => d.label),
        datasets: [
        {
            label: 'CoreBeliefs',
            data: raw.map(d => d.value),
            backgroundColor: raw.map(() => getRandomChartColor()),
            borderRadius: 6,
        },
        ],
    }
}

export function transformDayAndHourData(raw: { days: Record<string, number>, time: number[] }) {
    const dayLabels = Object.keys(raw.days)
    const dayValues = Object.values(raw.days)
  
    const hourLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`)
    const hourValues = raw.time
  
    return {
        dayChartData: {
            labels: dayLabels,
            datasets: [
                {
                    label: 'Thought Records by Day',
                    data: dayValues,
                    borderRadius: 6,
                    backgroundColor: dayValues.map(() => getRandomChartColor())
                }
            ]
            },
            hourChartData: {
                labels: hourLabels,
                datasets: [
                    {
                    label: 'Thought Records by Hour',
                    data: hourValues,
                    borderRadius: 6,
                    backgroundColor: hourValues.map(() => getRandomChartColor())
                    }
                ]
        }
    }
}

