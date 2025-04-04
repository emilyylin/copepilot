'use client'

import { Tabs } from 'antd'

import type { TabsProps } from 'antd'

import TRSection from '@/app/components/TRSection';
import EmotionsSection from '@/app/components/EmotionsSection';


function TRForm ({formData, setFormData, saveFormData}) {

    const trsections = [
        { key: 'situation', label: 'Situation', question: 'What happened?'},
        { key: 'thought', label: 'Thought', question: 'What were you thinking?'},
        { key: 'behavior', label: 'Behavior', question: 'What did you do?'},
    ];
    
    const items: TabsProps['items'] = [
        ...trsections.map((section, index) => ({
            key: String(index),
            label: section.label,
            children: (
                <>
                    <TRSection
                        value={formData[section.key]}
                        question={section.question}
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
                question="How are you feeling?"
                saveFormData={saveFormData}
                setFormData={setFormData}
              />
            ),
          },
    ];

    return (
        <div className="flex flex-col">
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
}

export default TRForm