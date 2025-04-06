'use client'

import Emotion from "@/app/thoughtrecord/Emotion";

function EmotionsSection ({formData, question, setFormData, newEmotion, setNewEmotion, addEmotion, deleteEmotion}) {

    return (
        <div className="py-3">
            <p className="pb-4 font-semibold">{question}</p>

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

            <span onClick={addEmotion} className="text-teal-600 border-b-2 cursor-pointer hover:text-teal-800 transition-all" > + Add Emotion </span>
        </div>
    );
}

export default EmotionsSection