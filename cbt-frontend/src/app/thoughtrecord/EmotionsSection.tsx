'use client'

import Emotion from "@/app/thoughtrecord/Emotion";

function EmotionsSection ({formData, question, setFormData, newEmotion, setNewEmotion, addEmotion, deleteEmotion}) {

    return (
        <div className="flex flex-col gap-1 py-2">
            <p className="text-lg font-semibold text-[var(--color-text-title)]">{question}</p>
            <p className="pb-4 text-xs text-[var(--color-text-muted)]" >Jot down your emotion and their intensity (ex. Anxious 100%)</p>

            <Emotion key={0} ifNew={true} emotion={newEmotion} setEmotion={setNewEmotion} deleteEmotion={()=>deleteEmotion(0)}/>

            {formData["emotions"]?.map((emotion, i) => (
                <Emotion
                    key={i}
                    index={i}
                    emotion={emotion}
                    ifNew={false}
                    deleteEmotion={deleteEmotion}
                    setEmotion={(updatedEmotion) => {
                        const updatedEmotions = [...formData.emotions];
                        updatedEmotions[i] = updatedEmotion;
                        setFormData(prev => ({
                            ...prev,
                            emotions: updatedEmotions
                        }));
                    }}
                    />
            ))}

            <span onClick={addEmotion} className="text-[var(--color-highlight)] cursor-pointer hover:text-[var(--color-green-hover)] transition-all" > + Add Emotion </span>
        </div>
    );
}

export default EmotionsSection