'use client'

import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

import React, {useState} from "react"

import TRFormCard from "@/app/thoughtrecord/TRFormCard"
import EmotionsSection from "@/app/thoughtrecord/EmotionsSection"
import Button from "@/app/components/Button"
import type { ThoughtRecord } from '@/types/types'

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

const trsections = [
    { 
        key: 'situation',
        label: 'Situation',
        question: 'What happened?',
        placeholder: 'Had a 1-on-1 with my manager and they looked distracted.',
        prompt: 'Briefly describe what happened. Just 1–2 sentences is enough.'
    },
    { 
        key: 'thought',
        label: 'Thought',
        question: 'What were you thinking?',
        placeholder: 'They must be disappointed in me. I probably messed something up again.',
        prompt: 'What were you thinking in that moment? Try to capture your automatic thought.'
    },
    { 
        key: 'behavior',
        label: 'Behavior',
        question: 'What did you do?',
        placeholder: 'Avoided eye contact and kept my answers short.',
        prompt: 'How did you respond or act? What did you do right after?'
    },
];


function TRForm ({setVisible, fetchTRs}) {

    const [newEmotion, setNewEmotion] = useState({label:"", intensity:""})

    const [formData, setFormData] = useState<ThoughtRecord>({
        situation: '',
        thought: '',
        behavior: '',
        emotions: [],
    });

    const cancel = () => {
        // clear form data
        setFormData({
            situation: '',
            thought: '',
            behavior: '',
            emotions: [],
        })

        setVisible(false)
    }

    const saveFormData = async () => {

        const hasNewEmotion = newEmotion.label.trim() !== ""

        const fullEmotions = hasNewEmotion
            ? [...formData.emotions, newEmotion]
            : formData.emotions

        const record = {
            ...formData,
            emotions: fullEmotions,
            timestamp: Date.now(),
        }

        // write to backend json
        try {
            await fetch(`${url}/saveThoughtRecord`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData: record }),
            })

            await fetchTRs()

        } catch ( err ) {
            console.error("Failed to save thought record: ", err)
        }

        // close form
        setVisible(false)

        // clear form data on save
        setFormData({
            situation: '',
            thought: '',
            behavior: '',
            emotions: [],
        })
    }

    const addEmotion = () => {
        setFormData(prev => ({
            ...prev,
            emotions: [...prev.emotions, newEmotion]
        }))
        setNewEmotion({label:"", intensity:""})
    }

    const deleteEmotion = (index:number) => {
        setFormData(prev => ({
            ...prev,
            emotions: prev.emotions.filter((_, i) => i !== index)
        }))
    }

    const items: TabsProps['items'] = [
        ...trsections.map((section, index) => ({
            key: String(index),
            label: section.label,
            children: (
                <>
                    <TRFormCard
                        value={formData[section.key]}
                        question={section.question}
                        prompt={section.prompt}
                        placeholder={section.placeholder}
                        setValue={(v) => setFormData(prev => ({ ...prev, [section.key]: v }))}
                    />
                </>
            ),
        })),
        {
            key: 'final',
            label: 'Emotion',
            children: (
              <EmotionsSection
                formData={formData}
                question="How were you feeling?"
                setFormData={setFormData}
                deleteEmotion={deleteEmotion}
                addEmotion={addEmotion}
                newEmotion={newEmotion}
                setNewEmotion={setNewEmotion}
              />
            ),
          },
    ];

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
            <div className="bg-[var(--color-foreground)] rounded-xl shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-end"> 
                    <button className="rounded-md bg-[var(--color-background)] w-6 h-6 text-center font-semibold hover:bg-[var(--color-error-red)] transition-colors" onClick={cancel}> x </button>
                </div>
                <div className="flex flex-col mx-5 gap-5">
                    <Tabs defaultActiveKey="0" items={items} className="custom-tabs"/>
                    <div className="flex flex-row justify-end">
                        <Button onClick={saveFormData} text={"Save"}/>
                    </div>     
                </div>
            </div>
        </div>
    );
}

export default TRForm