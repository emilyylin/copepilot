'use client'

import { Input } from "antd"

function Emotion ({emotion, setEmotion, ifNew, deleteEmotion, index}) {

    return (
        <div className = "flex flex-row gap-4 mb-4">
            <div className = "flex flex-col">
                <Input
                    value={emotion.label}
                    placeholder="Emotion"
                    onChange={(e) => setEmotion({ ...emotion, label: e.target.value })}
                />
            </div>

            <div className = "flex flex-col">
                <Input
                    value={emotion.intensity}
                    placeholder="Intensity (%)"
                    onChange={(e) => setEmotion({ ...emotion, intensity: e.target.value })}
                />
            </div>
            {!ifNew && <button onClick={()=>deleteEmotion(index)}>🗑</button>}
        </div>
    );

}

export default Emotion