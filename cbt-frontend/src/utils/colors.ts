const colors = [
    "bg-[#e88c84]",   // coral red
    "bg-[#b3c7e6]",   // dusty blue
    "bg-[#a7d6aa]",   // sage green
    "bg-[#f5cb80]",   // golden yellow
    "bg-[#c1b5d0]",   // lavender gray
    "bg-[#f2a7c1]"    // warm pink
] as const;
type Color = typeof colors[number]

export const getRandomColor = (): Color => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const chartColors = [
    "#e88c84",   // coral red
    "#b3c7e6",   // dusty blue
    "#a7d6aa",   // sage green
    "#f5cb80",   // golden yellow
    "#c1b5d0",   // lavender gray
    "#f2a7c1"    // warm pink
] as const;
type ChartColor = typeof chartColors[number]

export const getRandomChartColor = () => {
    const index = Math.floor(Math.random() * chartColors.length)
    return chartColors[index]
}