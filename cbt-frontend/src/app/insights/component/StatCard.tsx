'use client'

function StatCard ({title, stat}) {

    return (
        <div className="bg-white p-5 rounded-xl shadow-md flex-grow text-center">
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-3xl font-bold">{stat}</p>
        </div>
    )

}

export default StatCard