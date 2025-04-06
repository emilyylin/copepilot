import TRCard from "@/app/thoughtrecord/TRCard";

const colors = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-pink-100"] as const
type Color = typeof colors[number]

const getRandomColor = (): Color => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

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