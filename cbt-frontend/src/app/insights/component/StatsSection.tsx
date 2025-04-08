import StatCard from "@/app/insights/component/StatCard"

function StatSection () {

    const statsData = [
        { title: "Total Thought Records", stat: "1,200" },
        { title: "Current Streak", stat: "45 Days" },
        { title: "Avg Thoughts per Day", stat: "25" }
    ]

    return (
        <div className="flex flex-row justify-between gap-10">
            {statsData.map((data, index) => (
                <StatCard key={index} title={data.title} stat={data.stat} />
            ))}
        </div>
    )

}

export default StatSection