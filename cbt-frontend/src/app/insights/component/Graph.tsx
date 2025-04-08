'use client'

function Graph ({title, children, insight}) {

    return (
        <div className="shadow-md rounded-xl pt-12 p-10 bg-white h-full">
            <div className="flex flex-col items-center w-auto h-full">
                <div className="w-full h-full">
                    {children}
                </div>
                <h2 className="font-bold pt-10 text-lg">{title}</h2>
                <p className="text-xs text-[var(--color-text-muted)] pt-2">{insight}</p>
            </div>
        </div>
        
    )
}

export default Graph