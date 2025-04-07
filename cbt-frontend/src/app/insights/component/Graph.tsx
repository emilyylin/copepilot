'use client'

function Graph ({title, children}) {

    return (
        <div className="flex flex-col bg-white my-5 p-10 shadow-md items-center">
            <div className="">
                {children}
            </div>
            <h2 className="font-bold text-gray-600 pt-10 text-lg">{title}</h2>
        </div>
    )
}

export default Graph