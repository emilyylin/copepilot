'use client'

import { Input } from "antd"
import type { EmotionProps } from "@/app/types/types"

function Emotion ({emotion, setEmotion}: EmotionProps) {

    return (
        <div className = "flex flex-row">
            <div className = "flex flex-col">
                Emotion
                <Input
                    value={emotion.label}
                    onChange={(e) => setEmotion({ ...emotion, label: e.target.value })}
                />
            </div>

            <div>
                Intensity (%)
                <Input
                    value={emotion.intensity}
                    onChange={(e) => setEmotion({ ...emotion, intensity: e.target.value })}
                />
            </div>
        </div>
    );

}

export default Emotion