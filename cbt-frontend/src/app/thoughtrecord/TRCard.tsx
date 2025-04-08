import { DateTime } from "luxon"

function TRCard ({tr, color}) {

    const formatted = DateTime.fromMillis(tr.timestamp).toFormat("MMMM d, yyyy – h:mm a")
    
    return (
        <div className="w-full bg-white rounded-3xl border border-[var(--color-soft-gray)] shadow-sm hover:shadow-md transition py-10 px-10 space-y-3">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] font-semibold">
                <span
                    className= {`${color} inline-block w-2.5 h-2.5 rounded-full`}
                />
                {formatted}
            </div>
            <div className="flex flex-wrap gap-2">
                {tr.emotions.map((e,i) => 
                    <span key={i} className={`${color} px-2 py-1 rounded-md mr-2 text-xs`}>{e.label}</span>
                )}
            </div>

            <div className="flex flex-col">
                <p className="text-xs">{tr.situation}</p>
            </div>
            <div className="flex-col flex text-xs">
                <p className="font-semibold text-[var(--color-text-title)]">Behavior</p>
                <p>{tr.behavior}</p>
            </div>
            <div className="text-xs flex-col flex">
                <p className="font-semibold text-[var(--color-text-title)]">Thought</p>
                <p>{tr.thought}</p> 
            </div>
            
        </div>
    )

}

export default TRCard

