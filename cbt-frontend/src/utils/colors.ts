const colors = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-pink-100"] as const
type Color = typeof colors[number]

export const getRandomColor = (): Color => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const chartColors = ["#feb2b2", "#fbd38d", "#faf089", "#9ae6b4", "#81e6d9", "#d6bcfa"] as const
type ChartColor = typeof chartColors[number]

export const getRandomChartColor = () => {
    const index = Math.floor(Math.random() * chartColors.length)
    return chartColors[index]
}