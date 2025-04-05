'use client'

import Emotion from "@/app/components/Emotion";

import { Button } from "antd"
import React, { useState } from "react"

function EmotionsSection ({formData, question, setFormData, saveFormData}) {

    const [newEmotion, setNewEmotion] = useState({label:"", intensity:0})

    const addEmotion = () => {

        setFormData(prev => ({
            ...prev,
            emotions: [...prev.emotions, newEmotion]
        }))
        setNewEmotion({label:"", intensity:0})
    }

    return (
        <>
            {question}

            <Emotion key={0} emotion={newEmotion} setEmotion={setNewEmotion}/>
            <Button onClick={addEmotion}>+ Add Emotion</Button>

            {formData["emotions"]?.slice(1).map((emotion, i) => (
                <Emotion
                    key={i+1}
                    emotion={emotion}
                    setEmotion={(temp) => {
                        const copy = [...emotions];
                        copy[i+1] = temp;
                        setEmotions(copy);
                    }}/>
            ))}

            <Button onClick={saveFormData}>Save</Button>
        </>
    );
}

export default EmotionsSection