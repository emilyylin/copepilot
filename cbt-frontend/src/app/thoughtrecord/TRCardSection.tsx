import TRCard from "@/app/thoughtrecord/TRCard";
import { getRandomColor } from "@/utils/colors";

function TRCardSection ({trcards}) {

    return (
        <>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-10">
                {trcards.map((tr, i) => (
                    <div key={i} className="break-inside-avoid mb-4">
                        <TRCard tr={tr} color={getRandomColor()}/>
                    </div>
                ))}
            </div>
        </>
    )

}

export default TRCardSection