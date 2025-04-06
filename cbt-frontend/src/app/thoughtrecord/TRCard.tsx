import { DateTime } from "luxon"

function TRCard ({tr, color}) {

    const formatted = DateTime.fromMillis(tr.timestamp).toFormat("MMMM d, yyyy – h:mm a")
    
    return (
        <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition py-10 px-10 space-y-3">
            <p className="text-sm text-gray-400 font-semibold">🕒 {formatted}</p>
            <div className="flex flex-wrap gap-2">
                {tr.emotions.map((e,i) => 
                    <span key={i} className={`${color} px-2 py-1 rounded-md mr-2 text-xs`}>{e.label}</span>
                )}
            </div>

            <div className="flex flex-col">
                <p className="text-xs text-gray-700">{tr.situation}</p>
            </div>
            <div className="flex-col text-xs">
                <p className="font-semibold text-gray-600">Behavior</p>
                <p className="text-gray-700">{tr.behavior}</p>
            </div>
            <div className="text-xs flex-col">
                <p className="font-semibold text-gray-600">Thought</p>
                <p className="text-gray-700">{tr.thought}</p> 
            </div>
            
        </div>
    )

}

export default TRCard

