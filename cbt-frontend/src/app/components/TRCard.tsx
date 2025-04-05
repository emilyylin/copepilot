

function TRCard ({tr, key}) {

    console.log(tr)

    return (
        <div className="flex">
            {tr.situation}
            {tr.behavior}
            {tr.thought}
            {tr.emotions.map(e => `${e.label} (${e.intensity})`).join(", ")}
        </div>
    )

}

export default TRCard

